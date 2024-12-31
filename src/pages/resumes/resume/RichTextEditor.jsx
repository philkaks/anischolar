import { Brain, LoaderCircle } from 'lucide-react';
import React, { useState } from 'react';
import { BtnBold, BtnBulletList, BtnItalic, BtnNumberedList, BtnStrikeThrough, BtnUnderline, Editor, EditorProvider, Separator, Toolbar } from 'react-simple-wysiwyg';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { useAuth } from '../../../authProvider';
import { AIChatSession } from '../../../service/AiService';

const PROMPT = 'position titile: {positionTitle} , Depends on position title give me 5-7 summarized bullet points for my experience in resume, give me result in unordered list tags (Please do not add experince level and No JSON array)';

function RichTextEditor({ index, defaultValue, onRichTextEditorChange, item }) {
  const [value, setValue] = useState(defaultValue);
  const { cvContent, setCvContent } = useAuth();
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //     value && setCvContent({
  //         ...cvContent,
  //         ...experience[index],
  //         workSummary:value
  //     })
  //     cvContent?.experience 
  // }, [value])

  const parseAndFormatToHTML = (text) => {
    try {
      const jsonObject = JSON.parse(text);
      const points = Object.values(jsonObject).slice(1).flat();
      return `<ul>${points.map(point => `<li>${point}</li>`).join('')}</ul>`;
    } catch (error) {
      console.error("Failed to parse text:", error);
      return "<ul><li>Error generating list</li></ul>";
    }
  };


  const GenerateSummaryFromAI = async () => {
    
    if (!item?.title) {
      toast.error('Please Add Position Title');
      return;
    }

    setLoading(true);
    const prompt = PROMPT.replace('{positionTitle}', item.title);

    try {
      const result = await AIChatSession.sendMessage(prompt);
      const resp = result.response.text();

      // Parse and format response into HTML
      const formattedHTML = parseAndFormatToHTML(resp);
      setValue(formattedHTML);
        // Manually trigger onRichTextEditorChange
    onRichTextEditorChange({ target: { value: formattedHTML } });
    } catch (error) {
      console.error('Error generating summary:', error);
      toast.error('Failed to generate summary. Please try again.');
    } finally {
      setLoading(false);
      console.log(cvContent);
      
    }
  };
  return (
    <div>
      <div className="flex justify-between my-2">
        <label className="text-xs">Summary</label>
        <Button
          variant="outline"
          size="sm"
          onClick={GenerateSummaryFromAI}
          disabled={loading}
          className="flex gap-2 border-primary text-primary"
        >
          {loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <>
              <Brain className="h-4 w-4" /> Generate from AI
            </>
          )}
        </Button>
      </div>
      <EditorProvider>
        <Editor
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onRichTextEditorChange(e);
          }}
        >
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
}

export default RichTextEditor;

SyntaxHighlighter.brushes.Drools = function()
{

  var keywords    = 'assert duration end eval function modify query salience'
                  + 'retract return rule then when activation-group'
                  + 'agenda-group auto-focus no-loop';
  var external    = 'native package import static global';
  var conditional = 'if else switch and excludes exists or not matches';
  var operator    = 'new instanceof ->';
  var type        = 'boolean char byte short int long float double void';
 
  this.regexList = [
    { regex: /\s*#.*/gm, css: 'comments' }, 
    { regex: SyntaxHighlighter.regexLib.singleLineCComments, css: 'comments' }, 
    { regex: /\/\*([^\*][\s\S]*)?\*\//gm, css: 'comments' }, 
    { regex: /\/\*(?!\*\/)\*[\s\S]*?\*\//gm, css: 'preprocessor' },	
    { regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string' }, 
    { regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string' }, 
    { regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi, css: 'value' },	
    { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' }, 
    { regex: new RegExp(this.getKeywords(external), 'gm'), css: 'color3' },
    { regex: new RegExp(this.getKeywords(conditional), 'gm'), css: 'constants' }, 
    { regex: new RegExp(this.getKeywords(operator), 'gm'), css: 'color2' }, 
    { regex: new RegExp(this.getKeywords(type), 'gm'), css: 'color2' } 
 ];
			
  this.forHtmlScript({
			left	: /(&lt;|<)%[@!=]?/g, 
			right	: /%(&gt;|>)/g 
		});
};
SyntaxHighlighter.brushes.Drools.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Drools.aliases  = ['drools', 'drl'];

define(function(require, exports, module) {
  "use strict";
  
  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var StoryHighlightRules = require("./story_highlight_rules").StoryHighlightRules;
  
  var Mode = function() {
      this.HighlightRules = StoryHighlightRules;
      this.$behaviour = this.$defaultBehaviour;
  };
  oop.inherits(Mode, TextMode);
  
  (function() {
      this.lineCommentStart = "#";
      this.blockComment = {start: "###", end: "###"};
      
      this.$id = "ace/mode/story";
  }).call(Mode.prototype);
  
  exports.Mode = Mode;
  });
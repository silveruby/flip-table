var ft_view, ft_model;

FlipTableView = Backbone.View.extend({
	btnElement: null,
	inputElemnt: null,
	tableTextElement: null,
	tableFrontElement: null,
	tableEndElement: null,
	faceElement: null,
	
	initialize: function(){
		btnElement = this.$el.find("button[type=button]"); 
		inputElement = this.$el.find("input[type=text]");
		tableTextElement = this.$el.find("#table_text");
		tableFrontElement = this.$el.find("#table_front");
		tableEndElement = this.$el.find("#table_end"); 
		faceElement = this.$el.find("#face");
		this.render();
	},
	
	render : function(){
		this.showMehFace();	
		this.unflipTable();
		this.hideTextInput();
	},
	
	flip : function(){
		// find the flipped text
		var t_middle = ft_model.flipString(inputElement.val());
		if(t_middle.length == 0){
			t_middle = "─";
		}
		
		// update button
		btnElement.attr("name", "unflipBtn");	
		btnElement.html("Let's do it again!");
		
		
		// update face, table, and text with flipped version							
		this.showAngryFace();	
		this.flipTable(t_middle);		
		this.hideTextInput();		
	},
	
	unflip : function(){	
		// update button
		btnElement.attr("name", "flipBtn");	
		btnElement.html("Flip The Table!");	
		
		// update face, table, and text with unflipped version							
		this.showMehFace();	
		this.unflipTable();				
		this.showTextInput(); // make sure button is set to flipBtn 		
	},
	
	showTextInput : function(){
		if(btnElement.attr("name") == "flipBtn"){
			tableTextElement.css({"display": "none"});		
			inputElement.css({"display": "inline"});	
		}
		else{
			this.unflip();
		}
	},
	
	hideTextInput : function(){
		inputElement.val(""),		
		tableTextElement.css({"display": "inline"});		
		inputElement.css({"display": "none"});			
	},	
	
	showHappyFace : function(){
		faceElement.text("(づ◕‿◕｡)づ ");			
	},
	
	showMehFace : function(){
		faceElement.text("( > °_°)> ");		
	},
	
	showAngryFace : function(){
		faceElement.text("(╯°□°)╯︵ ");		
	},
	
	flipTable : function(t_middle){
		tableFrontElement.text("┴─");
		tableTextElement.text(t_middle);		
		tableEndElement.text("─┴");		
	},
	
	unflipTable : function(){
		tableFrontElement.text("┬─");
		tableTextElement.text("enter object of your rage here!");		
		tableEndElement.text("─┬");		
	},
	
	events: {
		"click #table_text" : "showTextInput",
		"click button[name=flipBtn]" : "flip",
		"click button[name=unflipBtn]" : "unflip"
	}
	
});

FlipTableModel = Backbone.Model.extend({
	defaults: {
		'a' : 'ɐ',
		'b' : 'q',
		'c' : 'ɔ',
		'd' : 'p',
		'e' : 'ǝ',
		'f' : 'ɟ',
		'g' : 'ƃ',
		'h' : 'ɥ',
		'i' : 'ı',
		'j' : 'ɾ',
		'k' : 'ʞ',
		'l' : 'ʃ',
		'm' : 'ɯ',
		'n' : 'u',
		'o' : 'o',
		'p' : 'd',
		'q' : 'b',
		'r' : 'ɹ',
		's' : 's',
		't' : 'ʇ',
		'u' : 'n',
		'v' : 'ʌ',
		'w' : 'ʍ',
		'x' : 'x',
		'y' : 'ʎ',
		'z' : 'z',
		'A' : 'ɐ',
		'B' : 'q',
		'C' : 'ɔ',
		'D' : 'p',
		'E' : 'ǝ',
		'F' : 'ɟ',
		'G' : 'ƃ',
		'H' : 'ɥ',
		'I' : 'ı',
		'J' : 'ɾ',
		'K' : 'ʞ',
		'L' : 'ʃ',
		'M' : 'ɯ',
		'N' : 'u',
		'O' : 'o',
		'P' : 'd',
		'Q' : 'b',
		'R' : 'ɹ',
		'S' : 's',
		'T' : 'ʇ',
		'U' : 'n',
		'V' : 'ʌ',
		'W' : 'ʍ',
		'X' : 'x',
		'Y' : 'ʎ',
		'Z' : 'z',		
		" " : " ",
		"!" : "¡",
		"?" : "¿",
		"'" : ","
	},
	flipCharacter: function(char2flip){
		if(this.get(char2flip)){
			return this.get(char2flip);
		}
		else{
			return null;
		}
	},
	flipString: function(str2flip){
		var strFlipped = "",
			tempChar;
			
		for(var i = str2flip.length; i >= 0; i--){
			tempChar = this.flipCharacter(str2flip[i]);
			if(tempChar != null){
				strFlipped += tempChar;		
			}
		}
		
		return strFlipped;
	}
	
});

ft_view = new FlipTableView({ el: $("#flipContent")});
ft_model = new FlipTableModel();
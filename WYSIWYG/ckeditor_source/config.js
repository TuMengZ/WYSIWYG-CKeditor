/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

if (!String.prototype.InArray) {
	String.prototype.InArray = function(arr) {
		for(var i=0;i<arr.length;i++) {
            if (arr[i] == this)
                return true;
        }
		return false;
	}
}

CKEDITOR.editorConfig = function( config )
{
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	var showTbButton = (typeof window.parent.wgCKEditorHideDisabledTbutton == 'undefined');
    
	CKEDITOR.plugins.addExternal( 'mediawiki',  CKEDITOR.basePath + 'plugins/mediawiki/' );
	CKEDITOR.plugins.addExternal( 'mwtemplate', CKEDITOR.basePath + 'plugins/mwtemplate/' );
	//CKEDITOR.plugins.addExternal( 'mwrefmarker', CKEDITOR.basePath + 'plugins/mwrefmarker/' );

	// %REMOVE_START%
	//07.11.14 RL Plugin "textselection" is not included in download bundle of CKeditor, because
	//            it has been manually downloaded and heavily modified for wysiwyg. 
	//            For some reason source mode requires adding it separatedly here.
	CKEDITOR.plugins.addExternal( 'textselection', CKEDITOR.basePath + 'plugins/textselection/' ); 
	// %REMOVE_END%

	// Remove the link plugin because it's replaced with the mediawiki plugin
	//CKEDITOR.config.plugins = CKEDITOR.config.plugins.replace( /(?:^|,)link(?=,|$)/, '' );
   
	var extraPlugins = "mediawiki,mwtemplate,textselection,tableresize,texttransform";   //08.09.14 RL // ,mwrefmarker
   
	config.toolbar = 'Wiki';
	// var origToolbar = CKEDITOR.config.toolbar_Full

    config.toolbar_Wiki = [
        // 27.11.13 RL  When editing section, "Save" button replaces whole text => disable it
		// 27.11.13 RL  ['Source'],['Save','Print','SpellChecker','Scayt'],
		['Source'],['Print','SpellChecker','Scayt'],
        ['PasteText','PasteFromWord', '-','Find','Replace'],
        ['SelectAll','RemoveFormat'],
        ['Subscript','Superscript'],
        ['Link','MWSimpleLink','Unlink'], //05.09.14 RL
        ['Undo','Redo'],
        ['Image', 'Table', 'HorizontalRule', 'SpecialChar'],
        ['MWTextTags', 'MWSpecialTags', 'MWTemplate', 'MWSignature', 'qiButton', 'wsButton', 'rmButton' ],
        [ 'stbButton' ],
        ['MWCategory'],            //07.01.14 RL  
        ['MWRefmarker', 'MWReferencesmarker', 'MWReferencesUpd'], //'MWRef','MWReferences'  //For references (citation)   //14.07.16 RL
        ['About'], 
        '/',
        ['Styles','Format','Font','FontSize'],
        ['Bold','Italic','Underline','Strike','TransformTextSwitcher'],                                                   //08.09.14 RL
        //[ 'TransformTextToUppercase', 'TransformTextToLowercase', 'TransformTextCapitalize', 'TransformTextSwitcher' ], //08.09.14 RL
        ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
        ['NumberedList','BulletedList', '-', 'Outdent','Indent', 'Blockquote'],
        ['TextColor','BGColor'],
        ['Maximize', 'ShowBlocks']
    ];

	config.extraPlugins = extraPlugins;
    config.height = '26em';
    config.resize_dir = 'vertical';
    config.language = mw.config.get('wgUserLanguage') || 'en';

    config.WikiSignature = '--~~~~';

    // remove format: address
    config.format_tags = 'p;h1;h2;h3;h4;h5;h6;pre;div';
    // use fontsizes only that do not harm the skin
    config.fontSize_sizes = 'smaller;larger;xx-small;x-small;small;medium;large;x-large;xx-large';

    //config.image2_captionedClass = 'caption';  //05.05.14 RL Possible CKeditor 4.4.0 backwards compatibility setting.

    config.readOnly = true;  //24.03.16 RL 
	
	config.allowedContent = true; //14.07.15 RL Disable ACF

	// %REMOVE_START%
	// 25.10.15 RL: Source mode requires all plugins to be listed here in order to get toolbar, editor area etc. on screen. %REMOVE_LINE%
	config.plugins =
		'about,' +
		'a11yhelp,' +
		'basicstyles,' +
		'bidi,' +
		'blockquote,' +
		'clipboard,' +
		'colorbutton,' +
		'colordialog,' +
		'copyformatting,' +
		'contextmenu,' +
		'dialogadvtab,' +
		'div,' +
		'elementspath,' +
		'enterkey,' +
		'entities,' +
		'filebrowser,' +
		'find,' +
		'flash,' +
		'floatingspace,' +
		'font,' +
		'format,' +
		'forms,' +
		'horizontalrule,' +
		'htmlwriter,' +
		'image,' +
		'iframe,' +
		'indentlist,' +
		'indentblock,' +
		'justify,' +
		'language,' +
		'link,' +
		'list,' +
		'liststyle,' +
		'magicline,' +
		'maximize,' +
		'newpage,' +
		'pagebreak,' +
		'pastefromword,' +
		'pastetext,' +
		'preview,' +
		'print,' +
		'removeformat,' +
		'resize,' +
		'save,' +
		'selectall,' +
		'showblocks,' +
		'showborders,' +
		'smiley,' +
		'sourcearea,' +
		'specialchar,' +
		'stylescombo,' +
		'tab,' +
		'table,' +
		'tabletools,' +
		'templates,' +
		'toolbar,' +
		'undo,' +
		'widget,' +
		'wysiwygarea';
	// %REMOVE_END%
};

// %LEAVE_UNMINIFIED% %REMOVE_LINE%

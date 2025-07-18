// app/modules/messages/native/renderer/RenderMessageOptionsContext.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var9 = native2;
    var3 = native6;
    var10 = native7;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var1 = function useResolvedUserOption(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var4 = arguments[1];
            var2 = undefined;
            if(!(var4 === var2)) { _fun0001_ip = 25; continue _fun0001 }
 12:
            var1 = _closure1_slot4;
            var4 = var1.USER_SETTING;
 25:
            var1 = var3.useSetting;
            var1 = var1.bind(var3)();
            var5 = _closure1_slot4;
            var5 = var5.USER_SETTING;
            if(!(var5 !== var4)) { _fun0001_ip = 90; continue _fun0001 }
 52:
            var5 = _closure1_slot4;
            var5 = var5.FORCE_ENABLE;
            if(!(var5 !== var4)) { _fun0001_ip = 86; continue _fun0001 }
 66:
            var3 = _closure1_slot4;
            var3 = var3.FORCE_DISABLE;
            if(!(var3 !== var4)) { _fun0001_ip = 82; continue _fun0001 }
 80:
            return var2;
 82:
            var2 = false;
            return var2;
 86:
            var2 = true;
            return var2;
 90:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var6 = 0;
    var5 = var10[var6];
    var4 = native4;
    var1 = undefined;
    var11 = var4.bind(var1)(var5);
    var _closure1_slot2 = var11;
    var5 = 1;
    var4 = var10[var5];
    var4 = var9.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var7 = {};
    var7['USER_SETTING'] = var6;
    var4 = 'USER_SETTING';
    var7[var6] = var4;
    var7['FORCE_ENABLE'] = var5;
    var4 = 'FORCE_ENABLE';
    var7[var5] = var4;
    var5 = 2;
    var7['FORCE_DISABLE'] = var5;
    var4 = 'FORCE_DISABLE';
    var7[var5] = var4;
    var _closure1_slot4 = var7;
    var6 = {'renderEmbeds': true, 'renderReactions': true, 'renderShortcuts': true, 'inlineEmbedMedia': true, 'inlineAttachmentMedia': true, 'animateEmoji': true, 'gifAutoPlay': false, 'renderCodedLinks': true, 'renderGiftCode': true, 'renderActivityInstanceEmbed': true, 'renderActivityInviteEmbed': true, 'renderComponents': true, 'renderThreadEmbeds': true, 'renderReplies': true, 'renderCommunicationDisabled': false, 'renderAttachments': true, 'renderExecutedCommands': true, 'renderPolls': true, 'renderForumPostActions': true, 'ignoreMentioned': false, 'ignoreEmbedDescriptionCache': false, 'forceHideSimpleEmbedContent': false, 'enableSwipeActions': false, 'useAlternateEmbedColors': false};
    var _closure1_slot5 = var6;
    var4 = var11.createContext;
    var5 = var4.bind(var11)(var6);
    var _closure1_slot6 = var5;
    var8 = var11.memo;
    var4 = function(arg1) {
        var4 = arg1;
        var1 = var4.children;
        var2 = null;
        var3 = Object.create(var2);
        var2 = 0;
        var3['children'] = var2;
        var10 = {};
        var9 = var4;
        var8 = var3;
        var6 = copyDataProperties(var10, var9, var8);
        var5 = _closure1_slot2;
        var4 = var5.useContext;
        var2 = _closure1_slot6;
        var9 = var4.bind(var5)(var2);
        var4 = _closure1_slot3;
        var3 = var2.Provider;
        var2 = {};
        var5 = {};
        var10 = var5;
        var7 = copyDataProperties(var10, var9);
        var10 = var5;
        var9 = var6;
        var6 = copyDataProperties(var10, var9);
        var2['value'] = var5;
        var2['children'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var8.bind(var11)(var4);
    var8 = 3;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/messages/native/renderer/RenderMessageOptionsContext.tsx';
    var8 = var9.bind(var10)(var8);
    var3['UserOption'] = var7;
    var3['DEFAULT_OPTIONS'] = var6;
    var3['RenderMessageOptionsContext'] = var5;
    var3['RenderMessageOptionsOverride'] = var4;
    var2 = function RenderMessageOptionsContextProvider(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var5 = var6.children;
            var3 = null;
            var4 = Object.create(var3);
            var1 = 0;
            var4['children'] = var1;
            var34 = {};
            var33 = var6;
            var32 = var4;
            var6 = copyDataProperties(var34, var33, var32);
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var _closure2_slot19 = var4;
            var _closure2_slot20 = var4;
            var _closure2_slot21 = var4;
            var _closure2_slot22 = var4;
            var _closure2_slot23 = var4;
            var9 = _closure1_slot7;
            var8 = _closure1_slot0;
            var10 = _closure1_slot1;
            var7 = 2;
            var11 = var10[var7];
            var11 = var8.bind(var4)(var11);
            var12 = var11.RenderEmbeds;
            var11 = var6.renderEmbeds;
            var16 = var9.bind(var4)(var12, var11);
            var _closure2_slot0 = var16;
            var11 = var10[var7];
            var11 = var8.bind(var4)(var11);
            var12 = var11.RenderReactions;
            var11 = var6.renderReactions;
            var14 = var9.bind(var4)(var12, var11);
            var _closure2_slot1 = var14;
            var11 = var10[var7];
            var11 = var8.bind(var4)(var11);
            var12 = var11.InlineEmbedMedia;
            var11 = var6.inlineEmbedMedia;
            var24 = var9.bind(var4)(var12, var11);
            var _closure2_slot2 = var24;
            var11 = var10[var7];
            var11 = var8.bind(var4)(var11);
            var12 = var11.InlineAttachmentMedia;
            var11 = var6.inlineAttachmentMedia;
            var25 = var9.bind(var4)(var12, var11);
            var _closure2_slot3 = var25;
            var11 = var10[var7];
            var11 = var8.bind(var4)(var11);
            var12 = var11.AnimateEmoji;
            var11 = var6.animateEmoji;
            var31 = var9.bind(var4)(var12, var11);
            var _closure2_slot4 = var31;
            var7 = var10[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.GifAutoPlay;
            var7 = var6.gifAutoPlay;
            var28 = var9.bind(var4)(var8, var7);
            var _closure2_slot5 = var28;
            var19 = var6.renderCodedLinks;
            if(!(var3 == var19)) { _fun0002_ip = 331; continue _fun0002 }
 321:
            var7 = _closure1_slot5;
            var19 = var7.renderCodedLinks;
 331:
            _closure2_slot6 = var19;
            var15 = var6.renderGiftCode;
            if(!(var3 == var15)) { _fun0002_ip = 355; continue _fun0002 }
 345:
            var7 = _closure1_slot5;
            var15 = var7.renderGiftCode;
 355:
            _closure2_slot7 = var15;
            var13 = var6.renderShortcuts;
            if(!(var3 == var13)) { _fun0002_ip = 379; continue _fun0002 }
 369:
            var7 = _closure1_slot5;
            var13 = var7.renderShortcuts;
 379:
            _closure2_slot8 = var13;
            var23 = var6.renderActivityInstanceEmbed;
            if(!(var3 == var23)) { _fun0002_ip = 403; continue _fun0002 }
 393:
            var7 = _closure1_slot5;
            var23 = var7.renderActivityInstanceEmbed;
 403:
            _closure2_slot9 = var23;
            var22 = var6.renderActivityInviteEmbed;
            if(!(var3 == var22)) { _fun0002_ip = 427; continue _fun0002 }
 417:
            var7 = _closure1_slot5;
            var22 = var7.renderActivityInviteEmbed;
 427:
            _closure2_slot10 = var22;
            var17 = var6.renderComponents;
            if(!(var3 == var17)) { _fun0002_ip = 451; continue _fun0002 }
 441:
            var7 = _closure1_slot5;
            var17 = var7.renderComponents;
 451:
            _closure2_slot11 = var17;
            var11 = var6.renderThreadEmbeds;
            if(!(var3 == var11)) { _fun0002_ip = 475; continue _fun0002 }
 465:
            var7 = _closure1_slot5;
            var11 = var7.renderThreadEmbeds;
 475:
            _closure2_slot12 = var11;
            var12 = var6.renderReplies;
            if(!(var3 == var12)) { _fun0002_ip = 499; continue _fun0002 }
 489:
            var7 = _closure1_slot5;
            var12 = var7.renderReplies;
 499:
            _closure2_slot13 = var12;
            var18 = var6.renderCommunicationDisabled;
            if(!(var3 == var18)) { _fun0002_ip = 523; continue _fun0002 }
 513:
            var7 = _closure1_slot5;
            var18 = var7.renderCommunicationDisabled;
 523:
            _closure2_slot14 = var18;
            var21 = var6.renderAttachments;
            if(!(var3 == var21)) { _fun0002_ip = 547; continue _fun0002 }
 537:
            var7 = _closure1_slot5;
            var21 = var7.renderAttachments;
 547:
            _closure2_slot15 = var21;
            var20 = var6.renderExecutedCommands;
            if(!(var3 == var20)) { _fun0002_ip = 571; continue _fun0002 }
 561:
            var7 = _closure1_slot5;
            var20 = var7.renderExecutedCommands;
 571:
            _closure2_slot16 = var20;
            var26 = var6.ignoreMentioned;
            if(!(var3 == var26)) { _fun0002_ip = 595; continue _fun0002 }
 585:
            var7 = _closure1_slot5;
            var26 = var7.ignoreMentioned;
 595:
            _closure2_slot17 = var26;
            var27 = var6.ignoreEmbedDescriptionCache;
            if(!(var3 == var27)) { _fun0002_ip = 619; continue _fun0002 }
 609:
            var7 = _closure1_slot5;
            var27 = var7.ignoreEmbedDescriptionCache;
 619:
            _closure2_slot18 = var27;
            var29 = var6.forceHideSimpleEmbedContent;
            if(!(var3 == var29)) { _fun0002_ip = 643; continue _fun0002 }
 633:
            var7 = _closure1_slot5;
            var29 = var7.forceHideSimpleEmbedContent;
 643:
            _closure2_slot19 = var29;
            var30 = var6.enableSwipeActions;
            if(!(var3 == var30)) { _fun0002_ip = 667; continue _fun0002 }
 657:
            var7 = _closure1_slot5;
            var30 = var7.enableSwipeActions;
 667:
            _closure2_slot20 = var30;
            var10 = var6.renderPolls;
            if(!(var3 == var10)) { _fun0002_ip = 691; continue _fun0002 }
 681:
            var7 = _closure1_slot5;
            var10 = var7.renderPolls;
 691:
            _closure2_slot21 = var10;
            var9 = var6.renderForumPostActions;
            if(!(var3 == var9)) { _fun0002_ip = 715; continue _fun0002 }
 705:
            var7 = _closure1_slot5;
            var9 = var7.renderForumPostActions;
 715:
            _closure2_slot22 = var9;
            var8 = var6.useAlternateEmbedColors;
            if(!(var3 == var8)) { _fun0002_ip = 739; continue _fun0002 }
 729:
            var3 = _closure1_slot5;
            var8 = var3.useAlternateEmbedColors;
 739:
            _closure2_slot23 = var8;
            var7 = _closure1_slot2;
            var6 = var7.useMemo;
            var3 = new Array(24);
            var3[0] = var31;
            var3[1] = var30;
            var3[2] = var29;
            var3[3] = var28;
            var3[4] = var27;
            var3[5] = var26;
            var3[6] = var25;
            var3[7] = var24;
            var3[8] = var23;
            var3[9] = var22;
            var3[10] = var21;
            var3[11] = var20;
            var3[12] = var19;
            var3[13] = var18;
            var3[14] = var17;
            var3[15] = var16;
            var3[16] = var15;
            var3[17] = var14;
            var3[18] = var13;
            var3[19] = var12;
            var3[20] = var11;
            var3[21] = var10;
            var3[22] = var9;
            var3[23] = var8;
            var2 = function() {
                var1 = {};
                var3 = _closure2_slot4;
                var1['animateEmoji'] = var3;
                var3 = _closure2_slot20;
                var1['enableSwipeActions'] = var3;
                var3 = _closure2_slot19;
                var1['forceHideSimpleEmbedContent'] = var3;
                var3 = _closure2_slot5;
                var1['gifAutoPlay'] = var3;
                var3 = _closure2_slot18;
                var1['ignoreEmbedDescriptionCache'] = var3;
                var3 = _closure2_slot17;
                var1['ignoreMentioned'] = var3;
                var3 = _closure2_slot3;
                var1['inlineAttachmentMedia'] = var3;
                var3 = _closure2_slot2;
                var1['inlineEmbedMedia'] = var3;
                var3 = _closure2_slot9;
                var1['renderActivityInstanceEmbed'] = var3;
                var3 = _closure2_slot10;
                var1['renderActivityInviteEmbed'] = var3;
                var3 = _closure2_slot15;
                var1['renderAttachments'] = var3;
                var3 = _closure2_slot16;
                var1['renderExecutedCommands'] = var3;
                var3 = _closure2_slot6;
                var1['renderCodedLinks'] = var3;
                var3 = _closure2_slot14;
                var1['renderCommunicationDisabled'] = var3;
                var3 = _closure2_slot11;
                var1['renderComponents'] = var3;
                var3 = _closure2_slot0;
                var1['renderEmbeds'] = var3;
                var3 = _closure2_slot7;
                var1['renderGiftCode'] = var3;
                var3 = _closure2_slot1;
                var1['renderReactions'] = var3;
                var3 = _closure2_slot8;
                var1['renderShortcuts'] = var3;
                var3 = _closure2_slot13;
                var1['renderReplies'] = var3;
                var3 = _closure2_slot12;
                var1['renderThreadEmbeds'] = var3;
                var3 = _closure2_slot21;
                var1['renderPolls'] = var3;
                var3 = _closure2_slot22;
                var1['renderForumPostActions'] = var3;
                var2 = _closure2_slot23;
                var1['useAlternateEmbedColors'] = var2;
                return var1;
            };
            var6 = var6.bind(var7)(var2, var3);
            var3 = _closure1_slot3;
            var1 = _closure1_slot6;
            var2 = var1.Provider;
            var1 = {};
            var1['value'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['RenderMessageOptionsContextProvider'] = var2;
    return var1;
})();
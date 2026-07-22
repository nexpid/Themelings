// app/modules/messages/native/renderer/MessageWithContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RowType;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/MessageWithContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function generateMessageRowData(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var11 = arg1;
            var3 = arg2;
            var8 = var11.changeType;
            var12 = var11.message;
            var24 = var11.roleStyle;
            var23 = var11.isFirst;
            var13 = var11.isEditing;
            var10 = var11.separatorBefore;
            var9 = var11.canAddNewReactions;
            var16 = var11.reactionsTheme;
            var1 = var11.isSystemDM;
            var2 = undefined;
            var21 = var2 !== var1;
            if(!var21) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var21 = var1;
case 2:
            var1 = var11.canShowImages;
            var22 = var2 === var1;
            if(var22) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var22 = var1;
case 4:
            var7 = var11.truncation;
            var14 = var11.renderContentOnly;
            var20 = var11.pushFeedbackType;
            var1 = var11.alwaysShowAddReaction;
            var4 = var2 !== var1;
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var1;
case 6:
            var6 = var11.overrideBackgroundHighlight;
            var19 = var11.showContentInventoryEntryFallbackEmbed;
            var1 = {};
            var15 = _closure1_slot4;
            var15 = var15.MESSAGE;
            var1['type'] = var15;
            var18 = _closure1_slot1;
            var15 = _closure1_slot2;
            var17 = 2;
            var17 = var15[var17];
            var18 = var18.bind(var2)(var17);
            var17 = {};
            var17['options'] = var3;
            var17['message'] = var12;
            var17['roleStyle'] = var24;
            var17['isFirst'] = var23;
            var17['isEditing'] = var13;
            var17['canShowImages'] = var22;
            var17['isSystemDM'] = var21;
            var21 = false;
            var17['isInlineReplyPreview'] = var21;
            var17['pushFeedbackType'] = var20;
            var17['renderContentOnly'] = var14;
            var17['showContentInventoryEntryFallbackEmbed'] = var19;
            var17 = var18.bind(var2)(var17);
            var1['message'] = var17;
            var1['canAddNewReactions'] = var9;
            var18 = _closure1_slot0;
            var9 = 3;
            var17 = var15[var9];
            var17 = var18.bind(var2)(var17);
            var20 = var17.intl;
            var19 = var20.string;
            var17 = var15[var9];
            var17 = var18.bind(var2)(var17);
            var17 = var17.t;
            var17 = var17.lfIHs4;
            var17 = var19.bind(var20)(var17);
            var1['addNewReactionAccessibilityLabel'] = var17;
            var1['reactionsTheme'] = var16;
            var16 = var15[var9];
            var16 = var18.bind(var2)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var9];
            var15 = var18.bind(var2)(var15);
            var15 = var15.t;
            var15 = var15.IOS/dU;
            var15 = var16.bind(var17)(var15);
            var1['highlightLabel'] = var15;
            var1['renderContentOnly'] = var14;
            var1['separatorBefore'] = var10;
            var1['changeType'] = var8;
            var1['truncation'] = var7;
            var1['alwaysShowAddReaction'] = var4;
            var4 = null;
            if(!(var4 == var6)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var7 = 4;
            var7 = var10[var7];
            var10 = var8.bind(var2)(var7);
            var8 = var10.createBackgroundHighlight;
            var7 = {};
            var7['message'] = var12;
            var14 = arg3;
            var7['theme'] = var14;
            var7['isEditing'] = var13;
            var14 = _closure1_slot3;
            var13 = var14.getMessage;
            var12 = var12.id;
            var12 = var13.bind(var14)(var12);
            var12 = var4 != var12;
            var7['isAutomodBlockedMessage'] = var12;
            var6 = var8.bind(var10)(var7);
case 8:
            var1['backgroundHighlight'] = var6;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 4;
            var6 = var8[var6];
            var10 = var7.bind(var2)(var6);
            var8 = var10.createSwipeActions;
            var7 = var3.enableSwipeActions;
            if(!var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = var11.canReply;
case 10:
            var6 = var3.enableSwipeActions;
            if(!var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = var11.canEdit;
case 12:
            var6 = var8.bind(var10)(var7, var6);
            var1['swipeActions'] = var6;
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = var5[var9];
            var6 = var8.bind(var2)(var6);
            var10 = var6.intl;
            var7 = var10.string;
            var6 = var5[var9];
            var6 = var8.bind(var2)(var6);
            var6 = var6.t;
            var6 = var6["5IEsGx"];
            var6 = var7.bind(var10)(var6);
            var1['replyAccessibilityLabel'] = var6;
            var6 = var5[var9];
            var6 = var8.bind(var2)(var6);
            var10 = var6.intl;
            var7 = var10.string;
            var6 = var5[var9];
            var6 = var8.bind(var2)(var6);
            var6 = var6.t;
            var6 = var6.I3ltXO;
            var6 = var7.bind(var10)(var6);
            var1['forwardAccessibilityLabel'] = var6;
            var6 = var5[var9];
            var6 = var8.bind(var2)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var5[var9];
            var5 = var8.bind(var2)(var5);
            var5 = var5.t;
            var5 = var5.rBIGBL;
            var5 = var6.bind(var7)(var5);
            var1['threadAccessibilityLabel'] = var5;
            var3 = var3.forcedTheme;
            var4 = var4 != var3;
            var2 = undefined;
            if(!var4) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var2 = var3;
case 14:
            var1['forcedTheme'] = var2;
            return var1;
        }
    };
    var3['generateMessageRowData'] = var2;
    return var1;
})();
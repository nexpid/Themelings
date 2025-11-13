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
            var9 = arg1;
            var3 = arg2;
            var12 = var9.changeType;
            var11 = var9.message;
            var25 = var9.roleStyle;
            var24 = var9.isFirst;
            var13 = var9.isEditing;
            var14 = var9.separatorBefore;
            var7 = var9.canAddNewReactions;
            var17 = var9.reactionsTheme;
            var1 = var9.isSystemDM;
            var6 = undefined;
            var22 = var6 !== var1;
            if(!var22) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var22 = var1;
case 2:
            var1 = var9.canShowImages;
            var23 = var6 === var1;
            if(var23) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var23 = var1;
case 4:
            var10 = var9.truncation;
            var15 = var9.renderContentOnly;
            var8 = var9.addReactionLabel;
            var21 = var9.pushFeedbackType;
            var1 = var9.alwaysShowAddReaction;
            var5 = var6 !== var1;
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var1;
case 6:
            var4 = var9.overrideBackgroundHighlight;
            var20 = var9.showContentInventoryEntryFallbackEmbed;
            var1 = {};
            var16 = _closure1_slot4;
            var16 = var16.MESSAGE;
            var1['type'] = var16;
            var19 = _closure1_slot1;
            var16 = _closure1_slot2;
            var18 = 2;
            var18 = var16[var18];
            var19 = var19.bind(var6)(var18);
            var18 = {};
            var18['options'] = var3;
            var18['message'] = var11;
            var18['roleStyle'] = var25;
            var18['isFirst'] = var24;
            var18['isEditing'] = var13;
            var18['canShowImages'] = var23;
            var18['isSystemDM'] = var22;
            var22 = false;
            var18['isInlineReplyPreview'] = var22;
            var18['pushFeedbackType'] = var21;
            var18['renderContentOnly'] = var15;
            var18['showContentInventoryEntryFallbackEmbed'] = var20;
            var18 = var19.bind(var6)(var18);
            var1['message'] = var18;
            var1['canAddNewReactions'] = var7;
            var19 = _closure1_slot0;
            var7 = 3;
            var18 = var16[var7];
            var18 = var19.bind(var6)(var18);
            var21 = var18.intl;
            var20 = var21.string;
            var18 = var16[var7];
            var18 = var19.bind(var6)(var18);
            var18 = var18.t;
            var18 = var18.lfIHs4;
            var18 = var20.bind(var21)(var18);
            var1['addNewReactionAccessibilityLabel'] = var18;
            var1['reactionsTheme'] = var17;
            var17 = var16[var7];
            var17 = var19.bind(var6)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var7];
            var16 = var19.bind(var6)(var16);
            var16 = var16.t;
            var16 = var16.IOS/dU;
            var16 = var17.bind(var18)(var16);
            var1['highlightLabel'] = var16;
            var1['renderContentOnly'] = var15;
            var1['separatorBefore'] = var14;
            var1['changeType'] = var12;
            var1['truncation'] = var10;
            var1['addReactionLabel'] = var8;
            var1['alwaysShowAddReaction'] = var5;
            var12 = null;
            if(!(var12 == var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 4;
            var5 = var10[var5];
            var10 = var8.bind(var6)(var5);
            var8 = var10.createBackgroundHighlight;
            var5 = {};
            var5['message'] = var11;
            var14 = arg3;
            var5['theme'] = var14;
            var5['isEditing'] = var13;
            var14 = _closure1_slot3;
            var13 = var14.getMessage;
            var11 = var11.id;
            var11 = var13.bind(var14)(var11);
            var11 = var12 != var11;
            var5['isAutomodBlockedMessage'] = var11;
            var4 = var8.bind(var10)(var5);
case 8:
            var1['backgroundHighlight'] = var4;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 4;
            var4 = var8[var4];
            var8 = var5.bind(var6)(var4);
            var5 = var8.createSwipeActions;
            var4 = var3.enableSwipeActions;
            if(!var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = var9.canReply;
case 10:
            var3 = var3.enableSwipeActions;
            if(!var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = var9.canEdit;
case 12:
            var3 = var5.bind(var8)(var4, var3);
            var1['swipeActions'] = var3;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = var2[var7];
            var3 = var5.bind(var6)(var3);
            var8 = var3.intl;
            var4 = var8.string;
            var3 = var2[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.5IEsGx;
            var3 = var4.bind(var8)(var3);
            var1['replyAccessibilityLabel'] = var3;
            var3 = var2[var7];
            var3 = var5.bind(var6)(var3);
            var8 = var3.intl;
            var4 = var8.string;
            var3 = var2[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.I3ltXO;
            var3 = var4.bind(var8)(var3);
            var1['forwardAccessibilityLabel'] = var3;
            var3 = var2[var7];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var2[var7];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.rBIGBL;
            var2 = var3.bind(var4)(var2);
            var1['threadAccessibilityLabel'] = var2;
            return var1;
        }
    };
    var3['generateMessageRowData'] = var2;
    return var1;
})();
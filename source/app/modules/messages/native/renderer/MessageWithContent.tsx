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
 0:
            var9 = arg1;
            var3 = arg2;
            var14 = var9.changeType;
            var11 = var9.message;
            var26 = var9.roleStyle;
            var25 = var9.isFirst;
            var13 = var9.isEditing;
            var15 = var9.separatorBefore;
            var7 = var9.canAddNewReactions;
            var18 = var9.reactionsTheme;
            var1 = var9.isSystemDM;
            var6 = undefined;
            var23 = var6 !== var1;
            if(!var23) { _fun0001_ip = 71; continue _fun0001 }
 68:
            var23 = var1;
 71:
            var1 = var9.canShowImages;
            var24 = var6 === var1;
            if(var24) { _fun0001_ip = 87; continue _fun0001 }
 84:
            var24 = var1;
 87:
            var12 = var9.messageFrame;
            var10 = var9.truncation;
            var16 = var9.renderContentOnly;
            var8 = var9.addReactionLabel;
            var22 = var9.pushFeedbackType;
            var1 = var9.alwaysShowAddReaction;
            var5 = var6 !== var1;
            if(!var5) { _fun0001_ip = 133; continue _fun0001 }
 130:
            var5 = var1;
 133:
            var4 = var9.overrideBackgroundHighlight;
            var21 = var9.showContentInventoryEntryFallbackEmbed;
            var1 = {};
            var17 = _closure1_slot4;
            var17 = var17.MESSAGE;
            var1['type'] = var17;
            var20 = _closure1_slot1;
            var17 = _closure1_slot2;
            var19 = 2;
            var19 = var17[var19];
            var20 = var20.bind(var6)(var19);
            var19 = {};
            var19['options'] = var3;
            var19['message'] = var11;
            var19['roleStyle'] = var26;
            var19['isFirst'] = var25;
            var19['isEditing'] = var13;
            var19['canShowImages'] = var24;
            var19['isSystemDM'] = var23;
            var23 = false;
            var19['isInlineReplyPreview'] = var23;
            var19['pushFeedbackType'] = var22;
            var19['renderContentOnly'] = var16;
            var19['showContentInventoryEntryFallbackEmbed'] = var21;
            var19 = var20.bind(var6)(var19);
            var1['message'] = var19;
            var1['canAddNewReactions'] = var7;
            var20 = _closure1_slot0;
            var7 = 3;
            var19 = var17[var7];
            var19 = var20.bind(var6)(var19);
            var22 = var19.intl;
            var21 = var22.string;
            var19 = var17[var7];
            var19 = var20.bind(var6)(var19);
            var19 = var19.t;
            var19 = var19.lfIHs7;
            var19 = var21.bind(var22)(var19);
            var1['addNewReactionAccessibilityLabel'] = var19;
            var1['reactionsTheme'] = var18;
            var18 = var17[var7];
            var18 = var20.bind(var6)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var17[var7];
            var17 = var20.bind(var6)(var17);
            var17 = var17.t;
            var17 = var17.IOS/dX;
            var17 = var18.bind(var19)(var17);
            var1['highlightLabel'] = var17;
            var1['renderContentOnly'] = var16;
            var1['separatorBefore'] = var15;
            var1['changeType'] = var14;
            var1['messageFrame'] = var12;
            var1['truncation'] = var10;
            var1['addReactionLabel'] = var8;
            var1['alwaysShowAddReaction'] = var5;
            var12 = null;
            if(!(var12 == var4)) { _fun0001_ip = 493; continue _fun0001 }
 414:
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
 493:
            var1['backgroundHighlight'] = var4;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 4;
            var4 = var8[var4];
            var8 = var5.bind(var6)(var4);
            var5 = var8.createSwipeActions;
            var4 = var3.enableSwipeActions;
            if(!var4) { _fun0001_ip = 541; continue _fun0001 }
 535:
            var4 = var9.canReply;
 541:
            var3 = var3.enableSwipeActions;
            if(!var3) { _fun0001_ip = 556; continue _fun0001 }
 550:
            var3 = var9.canEdit;
 556:
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
            var3 = var3.I3ltXF;
            var3 = var4.bind(var8)(var3);
            var1['forwardAccessibilityLabel'] = var3;
            var3 = var2[var7];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var2[var7];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.rBIGBA;
            var2 = var3.bind(var4)(var2);
            var1['threadAccessibilityLabel'] = var2;
            return var1;
        }
    };
    var3['generateMessageRowData'] = var2;
    return var1;
})();
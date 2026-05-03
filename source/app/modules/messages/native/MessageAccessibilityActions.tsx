// app/modules/messages/native/MessageAccessibilityActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function getQuickReactionLabel() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 3;
            var1 = var4[var1];
            var7 = undefined;
            var1 = var3.bind(var7)(var1);
            var3 = var1.DoubleTapReactionEmoji;
            var1 = var3.getSetting;
            var5 = var1.bind(var3)();
            var1 = null;
            var3 = var1 == var5;
            var4 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.disableDoubleTap;
case 2:
            var3 = true;
            if(!(var3 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!(var1 != var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 4;
            var3 = var6[var3];
            var4 = var4.bind(var7)(var3);
            var3 = var4.disambiguatedEmojiFromSettingsValue;
            var6 = var3.bind(var4)(var5);
            if(!(var1 == var6)) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 6;
            var3 = var5[var3];
            var3 = var4.bind(var7)(var3);
            var5 = var3.DoubleTapExpandExperiment;
            var4 = var5.getConfig;
            var3 = {};
            var8 = 'createMessageAccessibilityActions';
            var3['location'] = var8;
            var3 = var4.bind(var5)(var3);
            var4 = var3.enabled;
            var3 = null;
            if(!var4) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var5 = _closure1_slot0;
            var10 = _closure1_slot1;
            var4 = 5;
            var8 = var10[var4];
            var8 = var5.bind(var7)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var4 = var10[var4];
            var4 = var5.bind(var7)(var4);
            var4 = var4.t;
            var5 = var4.eQIttH;
            var4 = {};
            var10 = 'heart';
            var4['emojiName'] = var10;
            var3 = var8.bind(var9)(var5, var4);
case 9:
            return var3;
case 8:
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 5;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.eQIttH;
            var2 = {};
            var6 = var6.name;
            var2['emojiName'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot4 = var4;
    var4 = {};
    var5 = 'view_profile';
    var4['VIEW_PROFILE'] = var5;
    var5 = 'add_reaction';
    var4['ADD_REACTION'] = var5;
    var5 = 'add_quick_reaction';
    var4['ADD_QUICK_REACTION'] = var5;
    var5 = 'reply';
    var4['REPLY'] = var5;
    var5 = 'message_actions_menu';
    var4['MESSAGE_ACTIONS_MENU'] = var5;
    var5 = 'edit_gdm';
    var4['EDIT_GDM'] = var5;
    var _closure1_slot5 = var4;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/native/MessageAccessibilityActions.tsx';
    var5 = var6.bind(var7)(var5);
    var3['MessageAccessibilityAction'] = var4;
    var4 = function getMessageAccessibilityActionFromLabel(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 5;
            var3 = var9[var5];
            var4 = undefined;
            var3 = var8.bind(var4)(var3);
            var7 = var3.intl;
            var6 = var7.string;
            var3 = var9[var5];
            var3 = var8.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.iXAna6;
            var7 = var6.bind(var7)(var3);
            var3 = _closure1_slot5;
            var6 = var3.VIEW_PROFILE;
            var2[6] = var6;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var10 = var6.intl;
            var7 = var10.string;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.lfIHs4;
            var7 = var7.bind(var10)(var6);
            var6 = var3.ADD_REACTION;
            var2[6] = var6;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var10 = var6.intl;
            var7 = var10.string;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6["5IEsGx"];
            var7 = var7.bind(var10)(var6);
            var6 = var3.REPLY;
            var2[6] = var6;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var10 = var6.intl;
            var7 = var10.string;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.ChPNkN;
            var7 = var7.bind(var10)(var6);
            var6 = var3.MESSAGE_ACTIONS_MENU;
            var2[6] = var6;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5["5Q9+/L"];
            var5 = var6.bind(var7)(var5);
            var3 = var3.EDIT_GDM;
            var2[4] = var3;
            var3 = _closure1_slot6;
            var3 = var3.bind(var4)();
            var4 = null;
            if(!(var4 != var3)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var1 = _closure1_slot5;
            var1 = var1.ADD_QUICK_REACTION;
            var2[var3] = var1;
case 11:
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        }
    };
    var3['getMessageAccessibilityActionFromLabel'] = var4;
    var2 = function createMessageAccessibilityActions(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg2;
            var2 = null;
            if(!(var2 != var6)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var1 = var6.getGuildId;
            var5 = var1.bind(var6)();
            var3 = var2 != var5;
            if(!var3) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var4 = _closure1_slot2;
            var1 = var4.canChatInGuild;
            var3 = var1.bind(var4)(var5);
case 15:
            if(!var3) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var5 = _closure1_slot3;
            var4 = var5.can;
            var1 = _closure1_slot4;
            var1 = var1.ADD_REACTIONS;
            var3 = var4.bind(var5)(var1, var6);
case 17:
            if(var3) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var1 = var6.isPrivate;
            var3 = var1.bind(var6)();
case 19:
            var5 = {};
            var11 = _closure1_slot0;
            var1 = _closure1_slot1;
            var10 = 5;
            var7 = var1[var10];
            var9 = undefined;
            var7 = var11.bind(var9)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var1 = var1[var10];
            var1 = var11.bind(var9)(var1);
            var1 = var1.t;
            var1 = var1.iXAna6;
            var1 = var7.bind(var8)(var1);
            var5['label'] = var1;
            var1 = _closure1_slot5;
            var1 = var1.VIEW_PROFILE;
            var5['name'] = var1;
            var1 = new Array(1);
            var1[0] = var5;
            if(!var3) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var5 = var1.push;
            var3 = {};
            var12 = _closure1_slot0;
            var7 = _closure1_slot1;
            var8 = var7[var10];
            var8 = var12.bind(var9)(var8);
            var11 = var8.intl;
            var8 = var11.string;
            var7 = var7[var10];
            var7 = var12.bind(var9)(var7);
            var7 = var7.t;
            var7 = var7.lfIHs4;
            var7 = var8.bind(var11)(var7);
            var3['label'] = var7;
            var7 = _closure1_slot5;
            var7 = var7.ADD_REACTION;
            var3['name'] = var7;
            var3 = var5.bind(var1)(var3);
            var3 = _closure1_slot6;
            var5 = var3.bind(var9)();
            if(!(var2 != var5)) { _fun0003_ip = 21; continue _fun0003 }
case 23:
            var3 = var1.push;
            var2 = {};
            var2['label'] = var5;
            var5 = _closure1_slot5;
            var5 = var5.ADD_QUICK_REACTION;
            var2['name'] = var5;
            var2 = var3.bind(var1)(var2);
case 21:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 7;
            var2 = var5[var2];
            var5 = var3.bind(var9)(var2);
            var3 = var5.canReplyToMessage;
            var2 = arg1;
            var2 = var3.bind(var5)(var6, var2);
            if(!var2) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var3 = var1.push;
            var2 = {};
            var8 = _closure1_slot0;
            var5 = _closure1_slot1;
            var6 = var5[var10];
            var6 = var8.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var5[var10];
            var5 = var8.bind(var9)(var5);
            var5 = var5.t;
            var5 = var5["5IEsGx"];
            var5 = var6.bind(var7)(var5);
            var2['label'] = var5;
            var5 = _closure1_slot5;
            var5 = var5.REPLY;
            var2['name'] = var5;
            var2 = var3.bind(var1)(var2);
case 24:
            var3 = var1.push;
            var2 = {};
            var8 = _closure1_slot0;
            var5 = _closure1_slot1;
            var6 = var5[var10];
            var6 = var8.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var5[var10];
            var5 = var8.bind(var9)(var5);
            var5 = var5.t;
            var5 = var5.ChPNkN;
            var5 = var6.bind(var7)(var5);
            var2['label'] = var5;
            var4 = _closure1_slot5;
            var4 = var4.MESSAGE_ACTIONS_MENU;
            var2['name'] = var4;
            var2 = var3.bind(var1)(var2);
            return var1;
case 13:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['createMessageAccessibilityActions'] = var2;
    return var1;
})();
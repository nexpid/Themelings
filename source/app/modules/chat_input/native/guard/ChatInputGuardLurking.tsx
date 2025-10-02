// app/modules/chat_input/native/guard/ChatInputGuardLurking.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var7 = var7.bind(var1)(var4);
    var _closure1_slot4 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.TextAreaCta;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot8 = var8;
    var4 = var4.JoinGuildSources;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var2 = function ChatInputGuardLurking(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channel;
            var _closure2_slot0 = var4;
            var1 = var1.isReadonlyAnnouncementsChannel;
            var2 = var4.getGuildId;
            var12 = var2.bind(var4)();
            var _closure2_slot1 = var12;
            var6 = _closure1_slot0;
            var5 = _closure1_slot3;
            var2 = 6;
            var2 = var5[var2];
            var5 = undefined;
            var10 = var6.bind(var5)(var2);
            var9 = var10.useStateFromStoresObject;
            var2 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var2;
            var6 = new Array(1);
            var6[0] = var12;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot1;
                    var2 = null;
                    var2 = var2 != var4;
                    if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure1_slot5;
                    var4 = var5.isLurking;
                    var3 = _closure2_slot1;
                    var2 = var4.bind(var5)(var3);
case 2:
                    var1['isLurking'] = var2;
                    var3 = _closure1_slot5;
                    var2 = var3.getLurkingSource;
                    var2 = var2.bind(var3)();
                    var1['lurkingSource'] = var2;
                    return var1;
                }
            };
            var2 = var9.bind(var10)(var8, var2, var6);
            var11 = var2.isLurking;
            var2 = var2.lurkingSource;
            var10 = _closure1_slot4;
            var9 = var10.useCallback;
            var8 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getHistory;
                var3 = var2.bind(var3)();
                var2 = var3.goBack;
                var2 = var2.bind(var3)();
                return var1;
            };
            var6 = new Array(0);
            var8 = var9.bind(var10)(var8, var6);
            var9 = var10.useCallback;
            var6 = new Array(2);
            var6[0] = var12;
            var4 = var4.id;
            var6[1] = var4;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var3 = 8;
                    var3 = var5[var3];
                    var4 = undefined;
                    var8 = var6.bind(var4)(var3);
                    var7 = var8.trackWithMetadata;
                    var3 = _closure1_slot8;
                    var6 = var3.TEXT_AREA_CTA_CLICKED;
                    var3 = {};
                    var9 = _closure1_slot7;
                    var9 = var9.FOLLOW_ANNOUNCEMENT;
                    var3['cta_type'] = var9;
                    var3 = var7.bind(var8)(var6, var3);
                    var3 = _closure1_slot0;
                    var2 = 9;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.showChannelFollowingActionSheet;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2, var1);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var9.bind(var10)(var4, var6);
            var6 = var10.useCallback;
            var4 = new Array(1);
            var4[0] = var12;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                    var3 = _closure1_slot5;
                    var2 = var3.getLurkingSource;
                    var2 = var2.bind(var3)();
                    var6 = var1 == var2;
                    var3 = undefined;
                    var7 = undefined;
                    if(var6) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var7 = var2.type;
case 8:
                    var6 = _closure1_slot9;
                    var6 = var6.DIRECTORY_ENTRY;
                    if(!(var7 === var6)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var7 = _closure1_slot6;
                    var6 = var7.getChannel;
                    var2 = var2.directoryChannelId;
                    var2 = var6.bind(var7)(var2);
                    if(!(var1 != var2)) { _fun0004_ip = 10; continue _fun0004 }
case 12:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var1 = 10;
                    var1 = var9[var1];
                    var7 = var8.bind(var3)(var1);
                    var6 = var7.setHubProgressActionComplete;
                    var1 = var2.getGuildId;
                    var2 = var1.bind(var2)();
                    var1 = 11;
                    var1 = var9[var1];
                    var1 = var8.bind(var3)(var1);
                    var1 = var1.HubProgressStep;
                    var1 = var1.JOIN_GUILD;
                    var1 = var6.bind(var7)(var2, var1);
case 10:
                    var2 = _closure1_slot2;
                    var6 = _closure1_slot3;
                    var1 = 12;
                    var1 = var6[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.trackGuildJoinClicked;
                    var4 = _closure2_slot1;
                    var1 = var1.bind(var2)(var4);
                    var2 = _closure1_slot1;
                    var1 = 8;
                    var1 = var6[var1];
                    var9 = var2.bind(var3)(var1);
                    var8 = var9.trackWithMetadata;
                    var1 = _closure1_slot8;
                    var7 = var1.TEXT_AREA_CTA_CLICKED;
                    var1 = {};
                    var10 = _closure1_slot7;
                    var10 = var10.JOIN_GUILD;
                    var1['cta_type'] = var10;
                    var1 = var8.bind(var9)(var7, var1);
                    var1 = 13;
                    var1 = var6[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.joinGuild;
                    var1 = {};
                    var5 = _closure1_slot9;
                    var5 = var5.CHAT_INPUT_BLOCKER;
                    var1['source'] = var5;
                    var1 = var2.bind(var3)(var4, var1);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var6.bind(var10)(var3, var4);
            var3 = null;
            var4 = var3 == var2;
            var3 = undefined;
            if(var4) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = var2.type;
case 13:
            var2 = _closure1_slot9;
            var2 = var2.DIRECTORY_ENTRY;
            if(!(var3 !== var2)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var3 = _closure1_slot10;
            var4 = _closure1_slot1;
            var10 = _closure1_slot3;
            var2 = 14;
            var2 = var10[var2];
            var2 = var4.bind(var5)(var2);
            if(var1) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var1 = {};
            var4 = 'button-action';
            var1['type'] = var4;
            var13 = _closure1_slot0;
            var14 = _closure1_slot3;
            var4 = 15;
            var10 = var14[var4];
            var10 = var13.bind(var5)(var10);
            var15 = var10.intl;
            var12 = var15.string;
            var10 = var14[var4];
            var10 = var13.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.G42YmJ;
            var10 = var12.bind(var15)(var10);
            var1['message'] = var10;
            var10 = var14[var4];
            var10 = var13.bind(var5)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var4 = var14[var4];
            var4 = var13.bind(var5)(var4);
            var4 = var4.t;
            var4 = var4.RLch7+;
            var4 = var10.bind(var12)(var4);
            var1['buttonPrimaryText'] = var4;
            var1['buttonPrimaryOnPress'] = var6;
            _fun0001_ip = 19; continue _fun0001;
case 17:
            var4 = {};
            var10 = 'button-action';
            var4['type'] = var10;
            var15 = _closure1_slot0;
            var10 = _closure1_slot3;
            var14 = 15;
            var12 = var10[var14];
            var12 = var15.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var10 = var10[var14];
            var10 = var15.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.Hl0Mqq;
            var10 = var12.bind(var13)(var10);
            var4['message'] = var10;
            var10 = undefined;
            if(!var11) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var16 = _closure1_slot0;
            var12 = _closure1_slot3;
            var13 = var12[var14];
            var13 = var16.bind(var5)(var13);
            var15 = var13.intl;
            var13 = var15.string;
            var12 = var12[var14];
            var12 = var16.bind(var5)(var12);
            var12 = var12.t;
            var12 = var12.VJlc0d;
            var10 = var13.bind(var15)(var12);
case 20:
            var4['buttonSecondaryText'] = var10;
            var10 = undefined;
            if(!var11) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var10 = var6;
case 22:
            var4['buttonSecondaryOnPress'] = var10;
            var13 = _closure1_slot0;
            var10 = _closure1_slot3;
            var11 = var10[var14];
            var11 = var13.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var10[var14];
            var10 = var13.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.3aOv+v;
            var10 = var11.bind(var12)(var10);
            var4['buttonPrimaryText'] = var10;
            var4['buttonPrimaryOnPress'] = var9;
            var1 = var4;
case 19:
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 24; continue _fun0001;
case 15:
            var4 = _closure1_slot10;
            var3 = _closure1_slot1;
            var11 = _closure1_slot3;
            var2 = 14;
            var2 = var11[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var9 = 'button-action';
            var2['type'] = var9;
            var10 = _closure1_slot0;
            var7 = 15;
            var9 = var11[var7];
            var9 = var10.bind(var5)(var9);
            var13 = var9.intl;
            var12 = var13.string;
            var9 = var11[var7];
            var9 = var10.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.G42YmJ;
            var9 = var12.bind(var13)(var9);
            var2['message'] = var9;
            var9 = var11[var7];
            var9 = var10.bind(var5)(var9);
            var13 = var9.intl;
            var12 = var13.string;
            var9 = var11[var7];
            var9 = var10.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.GlKb5u;
            var9 = var12.bind(var13)(var9);
            var2['buttonSecondaryText'] = var9;
            var2['buttonSecondaryOnPress'] = var8;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.RLch7+;
            var7 = var8.bind(var9)(var7);
            var2['buttonPrimaryText'] = var7;
            var2['buttonPrimaryOnPress'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 24:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/guard/ChatInputGuardLurking.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
// app/components_native/ChannelContainer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function NotificationsContainer() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var2 = var1.isChatBesideChannelList;
            var1 = null;
            if(!var2) { _fun0001_ip = 105; continue _fun0001 }
 40:
            var4 = _closure1_slot10;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = _closure1_slot12;
            var7 = var7.container;
            var2['style'] = var7;
            var8 = _closure1_slot10;
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 9;
            var6 = var9[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 105:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {'position': 'absolute', 'left': 0, 'right': 0, 'backgroundColor': 'transparent', 'marginTop': 8};
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/ChannelContainer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var3 = var2.guildId;
            var _closure2_slot0 = var3;
            var16 = var2.channelId;
            var _closure2_slot1 = var16;
            var10 = var2.children;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 10;
            var2 = var9[var5];
            var8 = var3.bind(var4)(var2);
            var7 = var8.useStateFromStoresObject;
            var2 = _closure1_slot7;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = _closure1_slot6;
            var3[1] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot7;
                    var1 = var3.getVoiceChannelId;
                    var5 = var1.bind(var3)();
                    var1 = {};
                    var3 = _closure1_slot6;
                    var4 = var3.getChannel;
                    var2 = _closure2_slot1;
                    var2 = var4.bind(var3)(var2);
                    var1['channel'] = var2;
                    var1['voiceChannelId'] = var5;
                    var2 = global;
                    var4 = var2.Boolean;
                    var2 = var3.getChannel;
                    var6 = var2.bind(var3)(var5);
                    var2 = null;
                    var5 = var2 == var6;
                    var3 = undefined;
                    var2 = undefined;
                    if(var5) { _fun0003_ip = 90; continue _fun0003 }
 80:
                    var5 = var6.isGuildStageVoice;
                    var2 = var5.bind(var6)();
 90:
                    var2 = var4.bind(var3)(var2);
                    var1['isStageChannel'] = var2;
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var3, var2);
            var15 = var2.channel;
            var7 = var2.voiceChannelId;
            var3 = var2.isStageChannel;
            var8 = _closure1_slot1;
            var2 = 11;
            var2 = var9[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.bind(var4)(var7);
            var9 = !var3;
            if(var9) { _fun0002_ip = 151; continue _fun0002 }
 148:
            var9 = var2;
 151:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var7 = var3.bind(var4)(var2);
            var5 = var7.useStateFromStores;
            var2 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0004_ip = 38; continue _fun0004 }
 16:
                    var4 = _closure1_slot5;
                    var3 = var4.isLurking;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
 38:
                    return var1;
                }
            };
            var8 = var5.bind(var7)(var3, var2);
            var12 = null;
            var13 = var12 != var15;
            if(!var13) { _fun0002_ip = 217; continue _fun0002 }
 207:
            var2 = var15.isPrivate;
            var13 = var2.bind(var15)();
 217:
            _closure2_slot2 = var13;
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 12;
            var7 = var3[var2];
            var7 = var5.bind(var4)(var7);
            var11 = var7.bind(var4)(var13);
            _closure2_slot3 = var11;
            var2 = var3[var2];
            var2 = var5.bind(var4)(var2);
            var14 = var2.bind(var4)(var16);
            _closure2_slot4 = var14;
            var7 = _closure1_slot3;
            var5 = var7.useEffect;
            var2 = new Array(4);
            var2[0] = var16;
            var2[1] = var14;
            var2[2] = var13;
            var2[3] = var11;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0005_ip = 17; continue _fun0005 }
 10:
                    var2 = _closure2_slot2;
                    var1 = !var2;
 17:
                    if(var1) { _fun0005_ip = 49; continue _fun0005 }
 20:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0005_ip = 31; continue _fun0005 }
 27:
                    var2 = _closure2_slot2;
 31:
                    if(!var2) { _fun0005_ip = 46; continue _fun0005 }
 34:
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot4;
                    var2 = var4 !== var3;
 46:
                    var1 = var2;
 49:
                    if(!var1) { _fun0005_ip = 130; continue _fun0005 }
 52:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 13;
                    var1 = var7[var1];
                    var2 = undefined;
                    var4 = var6.bind(var2)(var1);
                    var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
                    var1 = 14;
                    var1 = var7[var1];
                    var1 = var6.bind(var2)(var1);
                    var1 = var1.DismissibleContent;
                    var2 = var1.ACTIVITY_GDM_CALL_TOOLTIP;
                    var1 = {};
                    var5 = _closure1_slot9;
                    var5 = var5.AUTO;
                    var1['dismissAction'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
 130:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var5.bind(var7)(var1, var2);
            var2 = _closure1_slot0;
            var1 = 15;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useChannelStyles;
            var13 = var1.bind(var2)();
            var3 = _closure1_slot11;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var13.scene;
            var1['style'] = var5;
            var7 = _closure1_slot4;
            var5 = {};
            var11 = var13.flex;
            var5['style'] = var11;
            var11 = var12 == var15;
            var16 = undefined;
            if(var11) { _fun0002_ip = 385; continue _fun0002 }
 380:
            var16 = var15.type;
 385:
            var11 = _closure1_slot8;
            var14 = var11.GUILD_ANNOUNCEMENT;
            var11 = null;
            if(!(var16 === var14)) { _fun0002_ip = 442; continue _fun0002 }
 401:
            var11 = null;
            if(!var8) { _fun0002_ip = 442; continue _fun0002 }
 406:
            var14 = _closure1_slot10;
            var12 = _closure1_slot1;
            var16 = _closure1_slot2;
            var8 = 16;
            var8 = var16[var8];
            var12 = var12.bind(var4)(var8);
            var8 = {};
            var8['channel'] = var15;
            var11 = var14.bind(var4)(var12, var8);
 442:
            var8 = new Array(3);
            var8[0] = var11;
            var8[1] = var10;
            if(!var9) { _fun0002_ip = 499; continue _fun0002 }
 457:
            var12 = _closure1_slot10;
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 17;
            var10 = var14[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var13 = var13.callPTTButton;
            var10['style'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 499:
            var8[2] = var9;
            var5['children'] = var8;
            var7 = var3.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot10;
            var7 = _closure1_slot13;
            var6 = {};
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ChannelContainer'] = var2;
    return var1;
})();
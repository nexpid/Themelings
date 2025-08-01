// app/modules/launchpad/native/LaunchPadMembers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var11 = 0;
    var7 = var6[var11];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.View;
    var _closure1_slot3 = var9;
    var9 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var8 = var9.create;
    var4 = {};
    var10 = {};
    var12 = 16;
    var10['minHeight'] = var12;
    var4['wrapper'] = var10;
    var10 = {};
    var10['flex'] = var11;
    var4['listStyle'] = var10;
    var10 = {};
    var11 = 20;
    var10['padding'] = var11;
    var4['emptyWrapper'] = var10;
    var10 = {};
    var11 = 'center';
    var10['textAlign'] = var11;
    var4['emptyText'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var2 = function LaunchPadMembers() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStoresObject;
            var1 = _closure1_slot5;
            var2 = new Array(2);
            var2[0] = var1;
            var1 = _closure1_slot4;
            var2[1] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure1_slot5;
                    var1 = var2.getCurrentlySelectedChannelId;
                    var5 = var1.bind(var2)();
                    var1 = null;
                    var6 = var1 != var5;
                    var2 = undefined;
                    var3 = undefined;
                    if(!var6) { _fun0002_ip = 33; continue _fun0002 }
 30:
                    var3 = var5;
 33:
                    var5 = _closure1_slot4;
                    var4 = var5.getChannel;
                    var4 = var4.bind(var5)(var3);
                    if(!(var1 != var3)) { _fun0002_ip = 140; continue _fun0002 }
 51:
                    if(!(var1 != var4)) { _fun0002_ip = 140; continue _fun0002 }
 55:
                    var1 = var4.isPrivate;
                    var1 = var1.bind(var4)();
                    if(var1) { _fun0002_ip = 122; continue _fun0002 }
 68:
                    var5 = var4.guild_id;
                    var1 = var4.isThread;
                    var1 = var1.bind(var4)();
                    var4 = {};
                    var4['channelId'] = var3;
                    var4['guildId'] = var5;
                    if(var1) { _fun0002_ip = 109; continue _fun0002 }
 96:
                    var1 = 'guild';
                    var4['type'] = var1;
                    var1 = var4;
                    _fun0002_ip = 120; continue _fun0002;
 109:
                    var5 = 'thread';
                    var4['type'] = var5;
                    var1 = var4;
 120:
                    return var1;
 122:
                    var1 = {};
                    var1['channelId'] = var3;
                    var3 = 'private';
                    var1['type'] = var3;
                    return var1;
 140:
                    var1 = {};
                    var1['channelId'] = var2;
                    var2 = 'none';
                    var1['type'] = var2;
                    return var1;
                }
            };
            var6 = var3.bind(var4)(var2, var1);
            var2 = var6.type;
            var1 = 'private';
            if(!(var1 !== var2)) { _fun0001_ip = 484; continue _fun0001 }
 84:
            var2 = var6.type;
            var1 = 'thread';
            if(!(var1 !== var2)) { _fun0001_ip = 370; continue _fun0001 }
 100:
            var2 = var6.type;
            var1 = 'guild';
            if(!(var1 !== var2)) { _fun0001_ip = 256; continue _fun0001 }
 116:
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var9 = _closure1_slot7;
            var4 = var9.emptyWrapper;
            var1['style'] = var4;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 9;
            var4 = var13[var4];
            var4 = var12.bind(var5)(var4);
            var8 = var4.Text;
            var4 = {};
            var9 = var9.emptyText;
            var4['style'] = var9;
            var9 = 'text-md/semibold';
            var4['variant'] = var9;
            var9 = 10;
            var10 = var13[var9];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.+7wtJi;
            var9 = var10.bind(var11)(var9);
            var4['children'] = var9;
            var4 = var3.bind(var5)(var8, var4);
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 368; continue _fun0001;
 256:
            var4 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = {};
            var8 = _closure1_slot7;
            var9 = var8.wrapper;
            var2['style'] = var9;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 8;
            var9 = var11[var9];
            var10 = var10.bind(var5)(var9);
            var9 = {};
            var11 = var6.channelId;
            var9['channelId'] = var11;
            var11 = var6.guildId;
            var9['guildId'] = var11;
            var8 = var8.listStyle;
            var9['listStyleOverride'] = var8;
            var8 = true;
            var9['disableBottomSafeZone'] = var8;
            var8 = 20;
            var9['insetEnd'] = var8;
            var8 = var6.channelId;
            var8 = var4.bind(var5)(var10, var9, var8);
            var2['children'] = var8;
            var1 = var4.bind(var5)(var3, var2);
 368:
            _fun0001_ip = 482; continue _fun0001;
 370:
            var4 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = {};
            var8 = _closure1_slot7;
            var9 = var8.wrapper;
            var2['style'] = var9;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 7;
            var9 = var11[var9];
            var10 = var10.bind(var5)(var9);
            var9 = {};
            var11 = var6.channelId;
            var9['channelId'] = var11;
            var11 = var6.guildId;
            var9['guildId'] = var11;
            var8 = var8.listStyle;
            var9['listStyleOverride'] = var8;
            var8 = true;
            var9['disableBottomSafeZone'] = var8;
            var8 = 20;
            var9['insetEnd'] = var8;
            var8 = var6.channelId;
            var8 = var4.bind(var5)(var10, var9, var8);
            var2['children'] = var8;
            var1 = var4.bind(var5)(var3, var2);
 482:
            _fun0001_ip = 587; continue _fun0001;
 484:
            var4 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = {};
            var9 = _closure1_slot7;
            var8 = var9.wrapper;
            var2['style'] = var8;
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var7 = 6;
            var7 = var10[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var10 = var6.channelId;
            var7['channelId'] = var10;
            var9 = var9.listStyle;
            var7['listStyleOverride'] = var9;
            var9 = true;
            var7['disableBottomSafeZone'] = var9;
            var9 = 20;
            var7['insetEnd'] = var9;
            var6 = var6.channelId;
            var6 = var4.bind(var5)(var8, var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 587:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/launchpad/native/LaunchPadMembers.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
// app/modules/activities/panel/native/ActivityPanelContainer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var4 = 5;
    var4 = var6[var4];
    var8 = var11.bind(var1)(var4);
    var4 = {};
    var10 = 6;
    var10 = var6[var10];
    var11 = var11.bind(var1)(var10);
    var10 = {};
    var10 = var9.bind(var1)(var11, var10);
    var4['children'] = var10;
    var4 = var9.bind(var1)(var8, var4);
    var _closure1_slot5 = var4;
    var4 = var7.memo;
    var2 = function ActivityPanelContainer() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var4.bind(var1)(var3);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot4;
            var4 = new Array(3);
            var4[0] = var1;
            var1 = _closure1_slot2;
            var4[1] = var1;
            var1 = _closure1_slot3;
            var4[2] = var1;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure1_slot4;
                    var1 = var2.getConnectedActivityLocation;
                    var6 = var1.bind(var2)();
                    var5 = null;
                    if(!(var5 != var6)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 8;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var1);
                    var1 = var4.getEmbeddedActivityLocationChannelId;
                    var4 = var1.bind(var4)(var6);
                    if(!(var5 != var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = _closure1_slot2;
                    var1 = var6.getChannel;
                    var7 = var1.bind(var6)(var4);
                    var1 = var5 == var7;
                    var6 = undefined;
                    if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var6 = var7.type;
case 6:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var1 = 9;
                    var1 = var9[var1];
                    var1 = var8.bind(var2)(var1);
                    var1 = var1.ChannelTypes;
                    var1 = var1.GUILD_TEXT;
                    var1 = var6 === var1;
                    if(var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var5 = var5 == var7;
                    var6 = undefined;
                    if(var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var5 = var7.isPrivate;
                    var6 = var5.bind(var7)();
case 10:
                    var5 = true;
                    var2 = undefined;
                    if(!(var5 === var6)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var5 = _closure1_slot3;
                    var3 = var5.getVoiceChannelId;
                    var3 = var3.bind(var5)();
                    var2 = var3 !== var4;
case 12:
                    var1 = var2;
case 8:
                    return var1;
case 4:
                    var1 = false;
                    return var1;
case 2:
                    var1 = false;
                    return var1;
                }
            };
            var1 = new Array(0);
            var3 = var5.bind(var6)(var4, var3, var1);
            var1 = null;
            if(!var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = _closure1_slot5;
case 14:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/panel/native/ActivityPanelContainer.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
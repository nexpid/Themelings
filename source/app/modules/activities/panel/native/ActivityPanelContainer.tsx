// app/modules/activities/panel/native/ActivityPanelContainer.tsx
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
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
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
    var4 = var7.memo;
    var2 = function ActivityPanelContainer() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var5 = undefined;
            var7 = var3.bind(var5)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot5;
            var4 = new Array(3);
            var4[0] = var1;
            var1 = _closure1_slot3;
            var4[1] = var1;
            var1 = _closure1_slot4;
            var4[2] = var1;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure1_slot5;
                    var1 = var2.getConnectedActivityLocation;
                    var6 = var1.bind(var2)();
                    var5 = null;
                    if(!(var5 != var6)) { _fun0002_ip = 184; continue _fun0002 }
 26:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var1);
                    var1 = var4.getEmbeddedActivityLocationChannelId;
                    var4 = var1.bind(var4)(var6);
                    if(!(var5 != var4)) { _fun0002_ip = 180; continue _fun0002 }
 63:
                    var6 = _closure1_slot3;
                    var1 = var6.getChannel;
                    var7 = var1.bind(var6)(var4);
                    var1 = var5 == var7;
                    var6 = undefined;
                    if(var1) { _fun0002_ip = 91; continue _fun0002 }
 86:
                    var6 = var7.type;
 91:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 7;
                    var1 = var9[var1];
                    var1 = var8.bind(var2)(var1);
                    var1 = var1.ChannelTypes;
                    var1 = var1.GUILD_TEXT;
                    var1 = var6 === var1;
                    if(var1) { _fun0002_ip = 178; continue _fun0002 }
 130:
                    var5 = var5 == var7;
                    var6 = undefined;
                    if(var5) { _fun0002_ip = 149; continue _fun0002 }
 139:
                    var5 = var7.isPrivate;
                    var6 = var5.bind(var7)();
 149:
                    var5 = true;
                    var2 = undefined;
                    if(!(var5 === var6)) { _fun0002_ip = 175; continue _fun0002 }
 157:
                    var5 = _closure1_slot4;
                    var3 = var5.getVoiceChannelId;
                    var3 = var3.bind(var5)();
                    var2 = var3 !== var4;
 175:
                    var1 = var2;
 178:
                    return var1;
 180:
                    var1 = false;
                    return var1;
 184:
                    var1 = false;
                    return var1;
                }
            };
            var1 = new Array(0);
            var3 = var6.bind(var7)(var4, var3, var1);
            var1 = null;
            if(!var3) { _fun0001_ip = 139; continue _fun0001 }
 83:
            var4 = _closure1_slot6;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 8;
            var2 = var8[var2];
            var3 = var7.bind(var5)(var2);
            var2 = {};
            var6 = 9;
            var6 = var8[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 139:
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
// app/modules/media_panel/native/MediaPlaybackPanelContainer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = var7.memo;
    var2 = function MediaPlaybackPanelContainer() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var5 = undefined;
            var4 = var3.bind(var5)(var1);
            var3 = var4.useMediaPlayerManagerStore;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.showPip;
                    var3 = !var1;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var2.canAccessMedia;
                    var3 = !var1;
case 2:
                    if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = var2.activeMediaPlayerSource;
                    var1 = null;
                    var3 = var1 == var4;
case 4:
                    var1 = !var3;
                    if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var8 = var2.mediaSourceMessage;
                    var2 = var2.activeMediaPlayerSource;
                    var3 = null;
                    var4 = var3 == var2;
                    var7 = undefined;
                    if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var7 = var2.attachmentIndex;
case 8:
                    var4 = var3 == var8;
                    var2 = false;
                    if(var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var4 = var3 == var7;
                    var2 = false;
                    if(var4) { _fun0002_ip = 10; continue _fun0002 }
case 12:
                    var4 = var3 == var8;
                    var5 = undefined;
                    if(var4) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var4 = var8.getContentMessage;
                    var4 = var4.bind(var8)();
                    var8 = var3 == var4;
                    var5 = undefined;
                    if(var8) { _fun0002_ip = 13; continue _fun0002 }
case 15:
                    var4 = var4.attachments;
                    var5 = var4[var7];
case 13:
                    var7 = var3 == var5;
                    var4 = undefined;
                    if(var7) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var7 = var5.content_type;
                    var5 = var3 == var7;
                    var4 = undefined;
                    if(var5) { _fun0002_ip = 16; continue _fun0002 }
case 18:
                    var6 = var7.startsWith;
                    var5 = 'audio';
                    var4 = var6.bind(var7)(var5);
case 16:
                    var3 = var3 != var4;
                    if(!var3) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var3 = var4;
case 19:
                    var2 = var3;
case 10:
                    var1 = var2;
case 6:
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var1);
            var1 = null;
            if(!var3) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var4 = _closure1_slot3;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 3;
            var2 = var8[var2];
            var3 = var7.bind(var5)(var2);
            var2 = {};
            var6 = 4;
            var6 = var8[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 21:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_panel/native/MediaPlaybackPanelContainer.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
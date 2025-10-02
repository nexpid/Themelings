// app/utils/getDeprecatedModalData.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ModalAnimation;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/getDeprecatedModalData.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getDeprecatedModalData(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg2;
            var5 = arguments[3];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = null;
case 2:
            var1 = {};
            var4 = var3.key;
            var2 = null;
            if(!(var2 != var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var4;
case 4:
            var6 = var2 != var5;
            var4 = 'modal';
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var5;
case 6:
            var1['key'] = var4;
            var4 = arg1;
            var1['modal'] = var4;
            var4 = var3.animation;
            if(!(var2 == var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = _closure1_slot0;
            var5 = var5.useReducedMotion;
            var6 = _closure1_slot1;
            if(var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var6.SLIDE_UP;
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var5 = var6.FADE;
case 12:
            var4 = var5;
case 8:
            var1['animation'] = var4;
            var5 = var3.shouldPersistUnderModals;
            var4 = var2 != var5;
            if(!var4) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var4 = var5;
case 13:
            var1['shouldPersistUnderModals'] = var4;
            var4 = arg3;
            var1['props'] = var4;
            var5 = var3.backdropStyle;
            var6 = var2 != var5;
            var4 = null;
            if(!var6) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var4 = var5;
case 15:
            var1['backdropStyle'] = var4;
            var5 = var3.backdropInstant;
            var4 = var2 != var5;
            if(!var4) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var4 = var5;
case 17:
            var1['backdropInstant'] = var4;
            var5 = var3.disableAnimation;
            var4 = var2 != var5;
            if(!var4) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var4 = var5;
case 19:
            var1['disableAnimation'] = var4;
            var4 = var3.closable;
            var5 = 'boolean';
            var4 = typeof var4;
            var4 = var5 !== var4;
            if(var4) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var4 = var3.closable;
case 21:
            var1['closable'] = var4;
            var3 = var3.label;
            var4 = var2 != var3;
            var2 = '';
            if(!var4) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var2 = var3;
case 23:
            var1['label'] = var2;
            var2 = {};
            var1['callbacks'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
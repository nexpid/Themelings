// app/modules/main_tabs_v2/native/settings/definitions/StreamOutputVolumeSetting.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getActiveApplicationStream() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arguments[0];
            var7 = undefined;
            if(!(var2 === var7)) { _fun0001_ip = 35; continue _fun0001 }
 9:
            var4 = _closure1_slot3;
            var1 = new Array(2);
            var1[0] = var4;
            var3 = _closure1_slot4;
            var1[1] = var3;
            var2 = var1;
 35:
            var4 = var2;
            var1 = var4[Symbol.iterator];
            var4 = var1().next;
            var5 = var4().value;
            var2 = var1;
            var3 = var2 === var7;
            var2 = undefined;
            if(var3) { _fun0001_ip = 60; continue _fun0001 }
 57:
            var2 = var5;
 60:
            var6 = undefined;
            if(var3) { _fun0001_ip = 90; continue _fun0001 }
 65:
            var5 = var4().value;
            var4 = var1;
            var4 = var4 === var7;
            var6 = undefined;
            var3 = var4;
            if(var4) { _fun0001_ip = 90; continue _fun0001 }
 84:
            var6 = var5;
            var3 = var4;
 90:
            if(var3) { _fun0001_ip = 96; continue _fun0001 }
 93:
            var1.return();
 96:
            var1 = var2.getLastActiveStream;
            var2 = var1.bind(var2)();
            var5 = null;
            var3 = var5 != var2;
            var1 = null;
            if(!var3) { _fun0001_ip = 142; continue _fun0001 }
 117:
            var4 = var2.ownerId;
            var3 = var6.getId;
            var3 = var3.bind(var6)();
            var1 = null;
            if(!(var4 !== var3)) { _fun0001_ip = 142; continue _fun0001 }
 139:
            var1 = var2;
 142:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.MobileSetting;
    var2 = {};
    var8 = 4;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.RendererType;
    var8 = var8.VOLUME_SLIDER;
    var2['type'] = var8;
    var8 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 9;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.pEAl4e;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var8;
    var7 = var7.VOICE;
    var2['parent'] = var7;
    var7 = 200;
    var2['maximum'] = var7;
    var7 = function useStreamVolumeSettingValue() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot3;
        var2 = new Array(3);
        var2[0] = var5;
        var5 = _closure1_slot4;
        var2[1] = var5;
        var1 = _closure1_slot5;
        var2[2] = var1;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure1_slot6;
                var4 = _closure1_slot3;
                var1 = new Array(2);
                var1[0] = var4;
                var4 = _closure1_slot4;
                var1[1] = var4;
                var7 = undefined;
                var3 = var3.bind(var7)(var1);
                var1 = null;
                var4 = var1 != var3;
                var1 = 0;
                if(!var4) { _fun0002_ip = 99; continue _fun0002 }
 45:
                var5 = _closure1_slot5;
                var4 = var5.getLocalVolume;
                var3 = var3.ownerId;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 6;
                var2 = var8[var2];
                var2 = var6.bind(var7)(var2);
                var2 = var2.MediaEngineContextTypes;
                var2 = var2.STREAM;
                var1 = var4.bind(var5)(var3, var2);
 99:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['useValue'] = var7;
    var7 = function onStreamValueSettingValueChange(arg1) {
        var3 = _closure1_slot6;
        var1 = undefined;
        var3 = var3.bind(var1)();
        var5 = _closure1_slot1;
        var7 = _closure1_slot2;
        var4 = 7;
        var4 = var7[var4];
        var8 = var5.bind(var1)(var4);
        var4 = null;
        var6 = var4 != var3;
        var4 = 'Can not set stream volume without active stream';
        var4 = var8.bind(var1)(var6, var4);
        var4 = 8;
        var4 = var7[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.setLocalVolume;
        var4 = var3.ownerId;
        var3 = _closure1_slot0;
        var2 = 6;
        var2 = var7[var2];
        var2 = var3.bind(var1)(var2);
        var2 = var2.MediaEngineContextTypes;
        var3 = var2.STREAM;
        var2 = arg1;
        var2 = var5.bind(var6)(var4, var2, var3);
        return var1;
    };
    var2['onValueChange'] = var7;
    var7 = function useHasStreamVolumeSetting() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var5;
        var1 = _closure1_slot4;
        var2[1] = var1;
        var1 = function() {
            var3 = _closure1_slot6;
            var4 = _closure1_slot3;
            var2 = new Array(2);
            var2[0] = var4;
            var1 = _closure1_slot4;
            var2[1] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['usePredicate'] = var7;
    var4 = function additionalSearchTerms() {
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 9;
        var1 = var7[var2];
        var5 = undefined;
        var1 = var6.bind(var5)(var1);
        var4 = var1.intl;
        var3 = var4.string;
        var1 = var7[var2];
        var1 = var6.bind(var5)(var1);
        var1 = var1.t;
        var1 = var1.3182VF;
        var3 = var3.bind(var4)(var1);
        var1 = new Array(2);
        var1[0] = var3;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var4 = var3.intl;
        var3 = var4.string;
        var2 = var7[var2];
        var2 = var6.bind(var5)(var2);
        var2 = var2.t;
        var2 = var2.DGq/PT;
        var2 = var3.bind(var4)(var2);
        var1[1] = var2;
        return var1;
    };
    var2['additionalSearchTerms'] = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/definitions/StreamOutputVolumeSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
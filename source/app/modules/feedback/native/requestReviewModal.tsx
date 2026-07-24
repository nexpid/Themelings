// app/modules/feedback/native/requestReviewModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _showAndroidRatingRequest() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3: // try_start_0
                    var10 = _closure1_slot5;
                    var9 = var10.info;
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var7 = 3;
                    var4 = var2[var7];
                    var6 = undefined;
                    var8 = var5.bind(var6)(var4);
                    var4 = null;
                    var13 = var4 != var8;
                    var8 = global;
                    var8 = var8.HermesInternal;
                    var12 = var8.concat;
                    var11 = 'Requesting Android rating (module linked: ';
                    var8 = ')';
                    var8 = var12.bind(var11)(var13, var8);
                    var8 = var9.bind(var10)(var8);
                    var2 = var2[var7];
                    var2 = var5.bind(var6)(var2);
                    var4 = var4 == var2;
                    var2 = undefined;
                    if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.requestRating;
                    var2 = var4.bind(var5)();
case 4:
                    SaveGenerator(address=138);
case 6:
                    return var2;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var5 = _closure1_slot5;
                    var4 = var5.info;
                    var3 = 'Android rating request dispatched';
                    var3 = var4.bind(var5)(var3);
                    var3 = {};
                    var4 = true;
                    var3['ok'] = var4;
case 10: // try_end0
                    return var3;
case 8:
                    return var2;
case 11: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var6 = _closure1_slot5;
                    var4 = var6.error;
                    var3 = global;
                    var2 = var3.HermesInternal;
                    var7 = var2.concat;
                    var2 = 'Failed to show Android rating request: ';
                    var2 = var7.bind(var2)(var5);
                    var2 = var4.bind(var6)(var2);
                    var2 = {};
                    var4 = false;
                    var2['ok'] = var4;
                    var4 = var3.String;
                    var3 = undefined;
                    var3 = var4.bind(var3)(var5);
                    var2['error'] = var3;
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'requestReviewModal';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/feedback/native/requestReviewModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function requestReviewModal() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 4;
            var2 = var3[var2];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.isAndroid;
            var2 = var2.bind(var4)();
            if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var1 = _closure1_slot4;
            var2 = var1.AppStoreManager;
            var1 = var2.requestReview;
            var1 = var1.bind(var2)();
            var1 = global;
            var4 = var1.Promise;
            var2 = var4.resolve;
            var1 = {};
            var5 = true;
            var1['ok'] = var5;
            var1 = var2.bind(var4)(var1);
            _fun0002_ip = 14; continue _fun0002;
case 12:
            var2 = function showAndroidRatingRequest() {
                var1 = undefined;
                var4 = _closure1_slot6;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1 = var2.bind(var3)();
case 14:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
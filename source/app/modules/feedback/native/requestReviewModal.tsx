// app/modules/feedback/native/requestReviewModal.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 138; continue _fun0001 }
 10: // try_start_0
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var6 = 3;
                    var2 = var2[var6];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var2);
                    var2 = null;
                    var4 = var2 == var4;
                    var2 = undefined;
                    if(var4) { _fun0001_ip = 75; continue _fun0001 }
 46:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.requestRating;
                    var2 = var3.bind(var4)();
 75:
                    SaveGenerator(address=79);
 77:
                    return var2;
 79:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 87; continue _fun0001 }
 85: // try_end0
                    _fun0001_ip = 133; continue _fun0001;
 87:
                    return var2;
 90: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var4 = _closure1_slot5;
                    var3 = var4.error;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var5 = var2.concat;
                    var2 = 'Failed to show Android rating request: ';
                    var2 = var5.bind(var2)(var6);
                    var2 = var3.bind(var4)(var2);
 133:
                    var2 = undefined;
                    return var2;
 138:
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
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(var3) { _fun0002_ip = 61; continue _fun0002 }
 37:
            var2 = _closure1_slot4;
            var3 = var2.AppStoreManager;
            var2 = var3.requestReview;
            var2 = var2.bind(var3)();
            _fun0002_ip = 74; continue _fun0002;
 61:
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
            var2 = var2.bind(var1)();
 74:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
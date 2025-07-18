// app/utils/native/FilePickerUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _handleDocumentSelection() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 452; continue _fun0001 }
 13:
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0001_ip = 21; continue _fun0001 }
 19:
                    var2 = {};
 21:
                    var2 = var2.pickMultiple;
                    if(!(var2 === var3)) { _fun0001_ip = 33; continue _fun0001 }
 31:
                    var2 = true;
 33:
                    var8 = var2;
                    SaveGenerator(address=40);
 38:
                    return var3;
 40:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 449; continue _fun0001 }
 49: // try_start_0
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 2;
                    var4 = var10[var4];
                    var6 = var7.bind(var3)(var4);
                    var5 = var6.pick;
                    var4 = 3;
                    var4 = var10[var4];
                    var7 = var7.bind(var3)(var4);
                    var4 = var7.isIOS;
                    var4 = var4.bind(var7)();
                    var7 = {};
                    var7['allowMultiSelection'] = var8;
                    if(var4) { _fun0001_ip = 125; continue _fun0001 }
 110:
                    var4 = 'import';
                    var7['mode'] = var4;
                    var4 = var7;
                    _fun0001_ip = 136; continue _fun0001;
 125:
                    var8 = 'open';
                    var7['mode'] = var8;
                    var4 = var7;
 136:
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=145);
 143:
                    return var4;
 145:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 154; continue _fun0001 }
 151: // try_end0
                    return var4;
 154:
                    return var4;
 157: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var9 = var7;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var8 = 2;
                    var5 = var5[var8];
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.isErrorWithCode;
                    var5 = var5.bind(var6)(var7);
                    if(!var5) { _fun0001_ip = 243; continue _fun0001 }
 199:
                    var5 = var9;
                    var6 = var5.code;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var5 = var7.bind(var3)(var5);
                    var5 = var5.errorCodes;
                    var5 = var5.OPERATION_CANCELED;
                    if(!(var6 !== var5)) { _fun0001_ip = 446; continue _fun0001 }
 243:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 4;
                    var5 = var11[var5];
                    var8 = var10.bind(var3)(var5);
                    var7 = var8.trackWithMetadata;
                    var5 = _closure1_slot4;
                    var6 = var5.MOBILE_FILE_PICKER_ERROR;
                    var5 = {};
                    var12 = global;
                    var13 = var12.JSON;
                    var12 = var13.stringify;
                    var9 = var12.bind(var13)(var9);
                    var5['error_message'] = var9;
                    var5 = var7.bind(var8)(var6, var5);
                    var5 = _closure1_slot1;
                    var4 = 5;
                    var4 = var11[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.show;
                    var4 = {};
                    var7 = 6;
                    var8 = var11[var7];
                    var8 = var10.bind(var3)(var8);
                    var12 = var8.intl;
                    var9 = var12.string;
                    var8 = var11[var7];
                    var8 = var10.bind(var3)(var8);
                    var8 = var8.t;
                    var8 = var8.rWHepa;
                    var8 = var9.bind(var12)(var8);
                    var4['title'] = var8;
                    var8 = var11[var7];
                    var8 = var10.bind(var3)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var3)(var7);
                    var7 = var7.t;
                    var7 = var7.fZRH9P;
                    var7 = var8.bind(var9)(var7);
                    var4['body'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
 446:
                    return var3;
 449:
                    return var2;
 452:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
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
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/FilePickerUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handleDocumentSelection() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['handleDocumentSelection'] = var2;
    return var1;
})();
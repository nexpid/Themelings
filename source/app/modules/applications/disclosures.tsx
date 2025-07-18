// app/modules/applications/disclosures.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _getDisclosures() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 154; continue _fun0001 }
 10:
                    var5 = _closure1_slot3;
                    var4 = var5.APPLICATION_DISCLOSURES;
                    var3 = arg1;
                    var5 = var4.bind(var5)(var3);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {'url': null, 'retries': 3, 'rejectWithError': false};
                    var2['url'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=88);
 86:
                    return var2;
 88:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 151; continue _fun0001 }
 94:
                    var3 = {};
                    var4 = var2.body;
                    var4 = var4.disclosures;
                    var3['disclosures'] = var4;
                    var4 = var2.body;
                    var4 = var4.acked_disclosures;
                    var3['ackedDisclosures'] = var4;
                    var4 = var2.body;
                    var4 = var4.all_acked;
                    var3['allAcked'] = var4;
                    return var3;
 151:
                    return var2;
 154:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot4 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = function _ackDisclosures() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 108; continue _fun0002 }
 7:
                    var5 = _closure1_slot3;
                    var4 = var5.APPLICATION_DISCLOSURES;
                    var3 = arg1;
                    var6 = var4.bind(var5)(var3);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 2;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {};
                    var2['url'] = var6;
                    var6 = {};
                    var7 = arg2;
                    var6['disclosures'] = var7;
                    var2['body'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=96);
 94:
                    return var2;
 96:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 105; continue _fun0002 }
 102:
                    return var3;
 105:
                    return var2;
 108:
                    return var1;
                }
            };
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
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.fileFinishedImporting;
    var4 = 'modules/applications/disclosures.tsx';
    var4 = var7.bind(var8)(var4);
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ApplicationDisclosureType;
    var3['ApplicationDisclosure'] = var4;
    var4 = function getDisclosures() {
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getDisclosures'] = var4;
    var4 = function ackDisclosures() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['ackDisclosures'] = var4;
    var2 = function getTextForDisclosure(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var6 = 3;
            var2 = var2[var6];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var2 = var2.ApplicationDisclosureType;
            var2 = var2.IP_LOCATION;
            if(!(var2 !== var3)) { _fun0003_ip = 140; continue _fun0003 }
 44:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ApplicationDisclosureType;
            var2 = var2.DISPLAYS_ADVERTISEMENTS;
            if(!(var2 !== var3)) { _fun0003_ip = 81; continue _fun0003 }
 77:
            var2 = null;
            return var2;
 81:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 4;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2./uOMKS;
            var2 = var3.bind(var4)(var2);
            return var2;
 140:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 4;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.6wPmjo;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getTextForDisclosure'] = var2;
    return var1;
})();
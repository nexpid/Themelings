// app/modules/activities/utils/CustomActivityLinkUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var8;
    var5 = function fetchCustomActivityLink() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var5;
    var1 = function _fetchCustomActivityLink() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var11 = arg1;
                    var5 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 348; continue _fun0001 }
 16:
                    var2 = null;
                    if(!(var2 != var11)) { _fun0001_ip = 345; continue _fun0001 }
 25:
                    if(!(var2 != var5)) { _fun0001_ip = 345; continue _fun0001 }
 32:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var10 = 3;
                    var3 = var3[var10];
                    var7 = undefined;
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.decodeCustomActivityLink;
                    var8 = var3.bind(var4)(var5);
                    var4 = var2 == var8;
                    var3 = null;
                    if(var4) { _fun0001_ip = 342; continue _fun0001 }
 80:
                    var5 = var8.type;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var10];
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.CustomLinkType;
                    var4 = var4.MANAGED;
                    if(!(var5 !== var4)) { _fun0001_ip = 250; continue _fun0001 }
 121:
                    var6 = var8.type;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var10];
                    var4 = var5.bind(var7)(var4);
                    var4 = var4.CustomLinkType;
                    var4 = var4.QUICK;
                    var5 = null;
                    if(!(var6 === var4)) { _fun0001_ip = 245; continue _fun0001 }
 161:
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 4;
                    var4 = var10[var4];
                    var4 = var6.bind(var7)(var4);
                    var10 = var4.HTTP;
                    var6 = var10.get;
                    var4 = {};
                    var14 = _closure1_slot5;
                    var13 = var14.APPLICATION_QUICK_ACTIVITY_LINK;
                    var12 = var8.decodedLinkId;
                    var12 = var13.bind(var14)(var11, var12);
                    var4['url'] = var12;
                    var12 = false;
                    var4['rejectWithError'] = var12;
                    var4 = var6.bind(var10)(var4);
                    SaveGenerator(address=234);
 232:
                    return var4;
 234:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 247; continue _fun0001 }
 240:
                    var5 = var4.body;
 245:
                    _fun0001_ip = 334; continue _fun0001;
 247:
                    return var4;
 250:
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 4;
                    var4 = var10[var4];
                    var4 = var6.bind(var7)(var4);
                    var7 = var4.HTTP;
                    var6 = var7.get;
                    var4 = {};
                    var10 = _closure1_slot5;
                    var9 = var10.APPLICATION_MANAGED_ACTIVITY_LINK;
                    var8 = var8.decodedLinkId;
                    var8 = var9.bind(var10)(var11, var8);
                    var4['url'] = var8;
                    var8 = false;
                    var4['rejectWithError'] = var8;
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=323);
 321:
                    return var4;
 323:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 339; continue _fun0001 }
 329:
                    var5 = var4.body;
 334:
                    var3 = var5;
                    _fun0001_ip = 342; continue _fun0001;
 339:
                    return var4;
 342:
                    return var3;
 345:
                    return var2;
 348:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function _getCustomActivityLinkParams() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var9 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 170; continue _fun0002 }
 13:
                    var4 = arg1;
                    var2 = arg2;
                    var8 = undefined;
                    var3 = undefined;
                    var5 = undefined;
                    var7 = null;
                    var10 = var7 != var9;
                    var6 = undefined;
                    if(!var10) { _fun0002_ip = 39; continue _fun0002 }
 36:
                    var6 = var9;
 39:
                    var3 = var6;
                    var6 = var2;
                    if(!(var7 != var6)) { _fun0002_ip = 160; continue _fun0002 }
 49:
                    var6 = var3;
                    if(!(var7 == var6)) { _fun0002_ip = 147; continue _fun0002 }
 56: // try_start_0
                    var6 = _closure1_slot7;
                    var2 = var6.bind(var8)(var4, var2);
                    SaveGenerator(address=73);
 71:
                    return var2;
 73:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 129; continue _fun0002 }
 79:
                    var5 = var2;
                    if(!(var7 != var2)) { _fun0002_ip = 113; continue _fun0002 }
 86:
                    var4 = {};
                    var6 = var3;
                    if(!(var7 == var6)) { _fun0002_ip = 103; continue _fun0002 }
 95:
                    var5 = var5.custom_id;
                    _fun0002_ip = 106; continue _fun0002;
 103:
                    var5 = var3;
 106:
                    var4['customId'] = var5;
                    _fun0002_ip = 126; continue _fun0002;
 113:
                    var5 = {};
                    var6 = var3;
                    var5['customId'] = var6;
                    var4 = var5;
 126: // try_end0
                    return var4;
 129:
                    return var2;
 132: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = {};
                    var4 = var3;
                    var2['customId'] = var4;
                    return var2;
 147:
                    var2 = {};
                    var4 = var3;
                    var2['customId'] = var4;
                    return var2;
 160:
                    var2 = {};
                    var2['customId'] = var3;
                    return var2;
 170:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var4 = function loadCustomActivityLink() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var4;
    var1 = function _loadCustomActivityLink() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    var7 = arg1;
                    var6 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 168; continue _fun0003 }
 16:
                    var5 = null;
                    if(!(var5 != var7)) { _fun0003_ip = 140; continue _fun0003 }
 22:
                    if(!(var5 != var6)) { _fun0003_ip = 140; continue _fun0003 }
 26:
                    var2 = _closure1_slot7;
                    var3 = undefined;
                    var2 = var2.bind(var3)(var7, var6);
                    SaveGenerator(address=45);
 43:
                    return var2;
 45:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0003_ip = 137; continue _fun0003 }
 51:
                    if(!(var5 != var2)) { _fun0003_ip = 109; continue _fun0003 }
 55:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS';
                    var4['type'] = var8;
                    var4['applicationId'] = var7;
                    var4['link'] = var2;
                    var4 = var5.bind(var6)(var4);
                    return var3;
 109:
                    var3 = global;
                    var5 = var3.Promise;
                    var4 = var5.reject;
                    var3 = 'fetchCustomActivityLink body is null';
                    var3 = var4.bind(var5)(var3);
                    return var3;
 137:
                    return var2;
 140:
                    var2 = global;
                    var4 = var2.Promise;
                    var3 = var4.reject;
                    var2 = 'appId or linkId null';
                    var2 = var3.bind(var4)(var2);
                    return var2;
 168:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var6 = global;
    var12 = var6.Object;
    var11 = var12.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var9);
    var1 = 0;
    var9 = var8[var1];
    var1 = undefined;
    var9 = var10.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var8[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 2;
    var9 = var8[var9];
    var9 = var7.bind(var1)(var9);
    var9 = var9.Endpoints;
    var _closure1_slot5 = var9;
    var6 = var6.Set;
    var9 = var6.prototype;
    var9 = Object.create(var9, {constructor: {value: var6}});
    var16 = var9;
    var6 = new var16[var6](var15);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot6 = var6;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/activities/utils/CustomActivityLinkUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['fetchCustomActivityLink'] = var5;
    var5 = function getCustomActivityLinkParams() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getCustomActivityLinkParams'] = var5;
    var5 = function getQuickLinkImage(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var7 = arg1;
            var1 = null;
            if(!(var1 == var7)) { _fun0004_ip = 13; continue _fun0004 }
 9:
            var1 = undefined;
            return var1;
 13:
            var1 = global;
            var2 = var1.location;
            var12 = var2.protocol;
            var2 = var1.window;
            var2 = var2.GLOBAL_ENV;
            var10 = var2.CDN_HOST;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var13 = '';
            var11 = '//';
            var9 = '/attachments-quick-links/';
            var8 = var7;
            var1 = var13[var4](var12, var11, var10, var9, var8, var7);
            return var1;
        }
    };
    var3['getQuickLinkImage'] = var5;
    var3['loadCustomActivityLink'] = var4;
    var2 = function getOrFetchCustomActivityLink(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var7 = arg1;
            var5 = arg2;
            var2 = _closure1_slot4;
            var1 = var2.getOne;
            var1 = var1.bind(var2)(var7, var5);
            var2 = null;
            if(!(var2 == var1)) { _fun0005_ip = 80; continue _fun0005 }
 33:
            var6 = _closure1_slot6;
            var4 = var6.has;
            var4 = var4.bind(var6)(var5);
            var1 = null;
            if(var4) { _fun0005_ip = 80; continue _fun0005 }
 52:
            var6 = _closure1_slot10;
            var4 = undefined;
            var4 = var6.bind(var4)(var7, var5);
            var4 = _closure1_slot6;
            var3 = var4.add;
            var3 = var3.bind(var4)(var5);
            var1 = null;
 80:
            return var1;
        }
    };
    var3['getOrFetchCustomActivityLink'] = var2;
    return var1;
})();
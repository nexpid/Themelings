// app/modules/user_profile/UserProfilePersonalWidget.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function stripUploadDataUri(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 'localDataUri';
            var2 = var2 in var1;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = var1.localDataUri;
            var4 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = undefined;
            var2 = var4.bind(var2)(var1, var3);
            return var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = ['localDataUri'];
    var _closure1_slot3 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = function() {
        var4 = function UserProfilePersonalWidget(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var3 = this;
                var4 = var1.id;
                var6 = var1.header;
                var7 = var1.top;
                var5 = var1.bottom;
                var9 = _closure1_slot4;
                var8 = _closure2_slot0;
                var1 = undefined;
                var8 = var9.bind(var1)(var3, var8);
                var3['id'] = var4;
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 3;
                var2 = var8[var2];
                var2 = var4.bind(var1)(var2);
                var2 = var2.WidgetType;
                var2 = var2.PERSONAL;
                var3['type'] = var2;
                var4 = null;
                var9 = var4 != var6;
                var8 = '';
                var2 = var8;
                if(!var9) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var2 = var6;
case 5:
                var3['header'] = var2;
                var6 = var4 != var7;
                var2 = undefined;
                if(!var6) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var6 = {};
                var10 = var7.title;
                var11 = var4 != var10;
                var9 = var8;
                if(!var11) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var9 = var10;
case 9:
                var6['title'] = var9;
                var9 = var7.subtitle;
                var10 = var4 != var9;
                if(!var10) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var8 = var9;
case 11:
                var6['subtitle'] = var8;
                var7 = var7.image;
                var6['image'] = var7;
                var2 = var6;
case 7:
                var3['top'] = var2;
                var2 = {};
                var7 = var4 == var5;
                var6 = undefined;
                if(var7) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var6 = var5.entries;
case 13:
                if(!(var4 == var6)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var6 = new Array(0);
case 15:
                var5 = var6.map;
                var4 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = arg1;
                        var4 = var3.hideImage;
                        var2 = true;
                        var1 = var3;
                        if(!(var2 === var4)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                        var4 = var3.image;
                        var2 = null;
                        var1 = var3;
                        if(!(var2 != var4)) { _fun0003_ip = 17; continue _fun0003 }
case 19:
                        var2 = {};
                        var6 = var2;
                        var5 = var3;
                        var3 = copyDataProperties(var6, var5);
                        var4 = undefined;
                        var3 = 'image';
                        var2[2] = var4;
                        var1 = var2;
case 17:
                        return var1;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var2['entries'] = var4;
                var3['bottom'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot5;
        var1 = {};
        var2 = 'toSubmission';
        var1['key'] = var2;
        var2 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var7 = this;
                var1 = {};
                var2 = var7.id;
                var1['id'] = var2;
                var2 = {};
                var3 = var7.type;
                var2['type'] = var3;
                var3 = global;
                var5 = var3.JSON;
                var4 = var5.stringify;
                var3 = {};
                var6 = var7.header;
                var3['header'] = var6;
                var8 = var7.top;
                var6 = null;
                var8 = var6 != var8;
                var11 = undefined;
                var6 = undefined;
                if(!var8) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                var8 = {};
                var12 = var7.top;
                var13 = var8;
                var9 = copyDataProperties(var13, var12);
                var10 = _closure1_slot7;
                var9 = var7.top;
                var9 = var9.image;
                var10 = var10.bind(var11)(var9);
                var9 = 'image';
                var8[8] = var10;
                var6 = var8;
case 20:
                var3['top'] = var6;
                var6 = {};
                var12 = var7.bottom;
                var13 = var6;
                var8 = copyDataProperties(var13, var12);
                var7 = var7.bottom;
                var9 = var7.entries;
                var8 = var9.map;
                var7 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var6 = var1;
                    var5 = var2;
                    var3 = copyDataProperties(var6, var5);
                    var4 = _closure1_slot7;
                    var3 = var2.image;
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = 'image';
                    var1[1] = var3;
                    return var1;
                };
                var8 = var8.bind(var9)(var7);
                var7 = 'entries';
                var6[6] = var8;
                var3['bottom'] = var6;
                var3 = var4.bind(var5)(var3);
                var2['title'] = var3;
                var1['data'] = var2;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(7);
        var2[0] = var1;
        var1 = {};
        var6 = 'isDiscardable';
        var1['key'] = var6;
        var6 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = this;
                var3 = var2.header;
                var1 = var3.trim;
                var1 = var1.bind(var3)();
                var7 = '';
                var1 = var7 === var1;
                if(!var1) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                var3 = var2.top;
                var6 = null;
                var3 = var6 == var3;
                if(var3) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                var4 = var2.top;
                var5 = var4.title;
                var4 = var5.trim;
                var4 = var4.bind(var5)();
                var4 = var7 === var4;
                if(!var4) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                var5 = var2.top;
                var8 = var5.subtitle;
                var5 = var8.trim;
                var5 = var5.bind(var8)();
                var4 = var7 === var5;
case 26:
                if(!var4) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                var5 = var2.top;
                var5 = var5.image;
                var4 = var6 == var5;
case 28:
                var3 = var4;
case 24:
                var1 = var3;
case 22:
                if(!var1) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                var2 = var2.bottom;
                var4 = var2.entries;
                var3 = var4.every;
                var2 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = arg1;
                        var3 = var2.value;
                        var1 = var3.trim;
                        var1 = var1.bind(var3)();
                        var4 = '';
                        var1 = var4 === var1;
                        if(!var1) { _fun0006_ip = 32; continue _fun0006 }
case 23:
                        var5 = var2.label;
                        var3 = var5.trim;
                        var3 = var3.bind(var5)();
                        var1 = var4 === var3;
case 32:
                        if(!var1) { _fun0006_ip = 33; continue _fun0006 }
case 2:
                        var3 = var2.image;
                        var2 = null;
                        var1 = var2 == var3;
case 33:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2);
case 30:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'isValid';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = var2.isDiscardable;
            var1 = var1.bind(var2)();
            var1 = !var1;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'isEqual';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = arg1;
                var4 = this;
                var1 = _closure2_slot0;
                var1 = var3 instanceof var1;
                if(!var1) { _fun0007_ip = 34; continue _fun0007 }
case 18:
                var7 = _closure1_slot1;
                var2 = _closure1_slot2;
                var8 = 4;
                var2 = var2[var8];
                var6 = undefined;
                var9 = var7.bind(var6)(var2);
                var7 = var4.header;
                var2 = var3.header;
                var2 = var9.bind(var6)(var7, var2);
                if(!var2) { _fun0007_ip = 35; continue _fun0007 }
case 36:
                var9 = _closure1_slot1;
                var7 = _closure1_slot2;
                var7 = var7[var8];
                var10 = var9.bind(var6)(var7);
                var9 = var4.top;
                var7 = var3.top;
                var2 = var10.bind(var6)(var9, var7);
case 35:
                if(!var2) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var5 = var7.bind(var6)(var5);
                var4 = var4.bottom;
                var3 = var3.bottom;
                var2 = var5.bind(var6)(var4, var3);
case 37:
                var1 = var2;
case 34:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getUniqueKey';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.type;
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'getProfileAnalyticsOptions';
        var1['key'] = var6;
        var6 = function value() {
            var1 = {};
            var2 = this;
            var2 = var2.type;
            var1['widgetType'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'getProfileEditAnalyticsOptions';
        var1['key'] = var6;
        var5 = function value() {
            var1 = {};
            var2 = this;
            var2 = var2.type;
            var1['widgetEdited'] = var2;
            return var1;
        };
        var1['value'] = var5;
        var2[6] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/UserProfilePersonalWidget.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function createDefaultPersonalWidgetTop() {
        var1 = {'title': '', 'subtitle': ''};
        return var1;
    };
    var3['createDefaultPersonalWidgetTop'] = var4;
    var3['UserProfilePersonalWidget'] = var2;
    return var1;
})();
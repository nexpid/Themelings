// app/modules/activities/records/CustomActivityLinkRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function CustomActivityLinkRecord(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = arg1;
                var3 = this;
                var6 = _closure1_slot2;
                var5 = _closure2_slot0;
                var1 = undefined;
                var5 = var6.bind(var1)(var3, var5);
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 2;
                var4 = var6[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.decodeCustomActivityLink;
                var4 = var2.link_id;
                var6 = var5.bind(var6)(var4);
                var4 = null;
                var7 = var4 == var6;
                var5 = undefined;
                if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = var6.type;
case 2:
                var6 = var4 != var5;
                var4 = null;
                if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = var5;
case 4:
                var3['type'] = var4;
                var4 = var2.application_id;
                var3['applicationId'] = var4;
                var4 = var2.link_id;
                var3['linkId'] = var4;
                var4 = 'asset_id';
                var5 = var4 in var2;
                var4 = undefined;
                if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var4 = var2.asset_id;
case 6:
                var3['assetId'] = var4;
                var4 = 'asset_path';
                var5 = var4 in var2;
                var4 = undefined;
                if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var4 = var2.asset_path;
case 8:
                var3['assetPath'] = var4;
                var4 = var2.title;
                var3['title'] = var4;
                var4 = var2.description;
                var3['description'] = var4;
                var2 = var2.custom_id;
                var3['customId'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var5 = 'getAssetURL';
        var1['key'] = var5;
        var2 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = this;
                var4 = var2.type;
                var6 = _closure1_slot0;
                var1 = _closure1_slot1;
                var7 = 2;
                var1 = var1[var7];
                var5 = undefined;
                var1 = var6.bind(var5)(var1);
                var1 = var1.CustomLinkType;
                var1 = var1.MANAGED;
                if(!(var4 !== var1)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var6 = var2.type;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var1 = var4.bind(var5)(var1);
                var1 = var1.CustomLinkType;
                var4 = var1.QUICK;
                var1 = undefined;
                if(!(var6 === var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 4;
                var4 = var7[var4];
                var7 = var6.bind(var5)(var4);
                var6 = var7.getQuickLinkImage;
                var4 = var2.assetPath;
                var1 = var6.bind(var7)(var4);
case 12:
                _fun0002_ip = 14; continue _fun0002;
case 10:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 3;
                var3 = var6[var3];
                var6 = var4.bind(var5)(var3);
                var5 = var6.getAssetImage;
                var4 = var2.applicationId;
                var3 = var2.assetId;
                var2 = 512;
                var1 = var5.bind(var6)(var4, var3, var2);
case 14:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/records/CustomActivityLinkRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
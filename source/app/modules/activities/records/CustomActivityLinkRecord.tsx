// app/modules/activities/records/CustomActivityLinkRecord.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
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
                if(var7) { _fun0001_ip = 81; continue _fun0001 }
 76:
                var5 = var6.type;
 81:
                var6 = var4 != var5;
                var4 = null;
                if(!var6) { _fun0001_ip = 93; continue _fun0001 }
 90:
                var4 = var5;
 93:
                var3['type'] = var4;
                var4 = var2.application_id;
                var3['applicationId'] = var4;
                var4 = var2.link_id;
                var3['linkId'] = var4;
                var4 = 'asset_id';
                var5 = var4 in var2;
                var4 = undefined;
                if(!var5) { _fun0001_ip = 142; continue _fun0001 }
 136:
                var4 = var2.asset_id;
 142:
                var3['assetId'] = var4;
                var4 = 'asset_path';
                var5 = var4 in var2;
                var4 = undefined;
                if(!var5) { _fun0001_ip = 171; continue _fun0001 }
 163:
                var4 = var2.asset_path;
 171:
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
 0:
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
                if(!(var4 !== var1)) { _fun0002_ip = 128; continue _fun0002 }
 49:
                var6 = var2.type;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var1 = var4.bind(var5)(var1);
                var1 = var1.CustomLinkType;
                var4 = var1.QUICK;
                var1 = undefined;
                if(!(var6 === var4)) { _fun0002_ip = 126; continue _fun0002 }
 89:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 4;
                var4 = var7[var4];
                var7 = var6.bind(var5)(var4);
                var6 = var7.getQuickLinkImage;
                var4 = var2.assetPath;
                var1 = var6.bind(var7)(var4);
 126:
                _fun0002_ip = 178; continue _fun0002;
 128:
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
 178:
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
// app/modules/activities/utils/getPresenceActivityInviteCoverImageURL.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
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
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/getPresenceActivityInviteCoverImageURL.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.messageId;
            var7 = var1.presenceActivity;
            var9 = var1.application;
            var4 = _closure1_slot4;
            var2 = var4.getCoverImageURL;
            var1 = {};
            var1['messageId'] = var6;
            var4 = var2.bind(var4)(var1);
            var1 = null;
            if(!(var1 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = _closure1_slot1;
            var5 = _closure1_slot3;
            var2 = 1;
            var2 = var5[var2];
            var5 = undefined;
            var2 = var8.bind(var5)(var2);
            var8 = var2.bind(var5)();
            var2 = 600;
            var8 = var2 * var8;
            var10 = var1 == var7;
            var2 = undefined;
            if(var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = var7.assets;
            var11 = var1 == var10;
            var2 = undefined;
            if(var11) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var2 = var10.invite_cover_image;
case 4:
            var10 = var1 != var2;
            var2 = null;
            if(!var10) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var11 = _closure1_slot0;
            var12 = _closure1_slot3;
            var10 = 2;
            var10 = var12[var10];
            var12 = var11.bind(var5)(var10);
            var11 = var12.getAssetImage;
            var10 = var7.application_id;
            var7 = var7.assets;
            var7 = var7.invite_cover_image;
            var2 = var11.bind(var12)(var10, var7, var8);
case 7:
            var7 = var4;
            if(!(var1 != var2)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var7 = var2;
case 9:
            if(!(var1 == var7)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = var9.getCoverImageURL;
            var7 = var2.bind(var9)(var8);
case 11:
            var8 = var1 != var7;
            var2 = null;
            if(!var8) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var2 = var7;
case 13:
            if(!(var4 !== var2)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var4 = _closure1_slot2;
            var7 = _closure1_slot3;
            var3 = 3;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.setCoverImageURL;
            var3 = {};
            var3['messageId'] = var6;
            var3['coverImageURL'] = var2;
            var3 = var4.bind(var5)(var3);
case 15:
            return var2;
case 2:
            return var1;
        }
    };
    var3['getPresenceActivityInviteCoverImageURL'] = var2;
    return var1;
})();
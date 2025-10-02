// app/utils/ChannelSortingUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var7;
    var4 = function areTypesInSameSection(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var6 = arg2;
            var2 = null;
            var1 = var2 != var7;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2 != var6;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var7 === var6;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot2;
            var5 = undefined;
            var3 = var3.bind(var5)(var7);
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = _closure1_slot2;
            var3 = var4.bind(var5)(var6);
case 8:
            var2 = var3;
case 6:
            if(var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = _closure1_slot3;
            var5 = undefined;
            var3 = var3.bind(var5)(var7);
            if(!var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = _closure1_slot3;
            var3 = var4.bind(var5)(var6);
case 12:
            var2 = var3;
case 10:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = function getFirstChannelOfType(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var9 = arg1;
            var8 = arg3;
            var7 = arg4;
            var2 = arg2;
            var _closure2_slot0 = var2;
            var2 = -1;
            var _closure2_slot1 = var2;
            var3 = var7.find;
            var2 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.channel;
                    var2 = var1.id;
                    var1 = _closure2_slot0;
                    var1 = var2 === var1;
                    if(!var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var2 = arg2;
                    _closure2_slot1 = var2;
                    var1 = true;
case 14:
                    return var1;
                }
            };
            var2 = var3.bind(var7)(var2);
            var2 = _closure2_slot1;
            var6 = 0;
            if(!(!(var2 < var6))) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var5 = _closure2_slot1;
            if(!(var5 >= var6)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var1 = var7.length;
            var3 = undefined;
            if(!(var5 < var1)) { _fun0002_ip = 18; continue _fun0002 }
case 13:
            var1 = var7[var5];
            var10 = _closure1_slot5;
            var2 = var1.channel;
            var2 = var2.type;
            var2 = var10.bind(var3)(var2, var8);
            if(var2) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var5 = var5 + var9;
            if(!(var5 >= var6)) { _fun0002_ip = 18; continue _fun0002 }
case 22:
            var2 = var7.length;
            if(var5 < var2) { _fun0002_ip = 13; continue _fun0002 }
case 18:
            var2 = null;
            return var2;
case 20:
            return var1;
case 16:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function getChannelPosition(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var5 = arguments[2];
            var _closure2_slot0 = var3;
            var2 = undefined;
            if(!(var5 === var2)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var5 = false;
case 23:
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var2;
            var2 = null;
            if(!(var2 != var3)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            _closure2_slot2 = var2;
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.channel;
                    var6 = var1.type;
                    var2 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0005_ip = 27; continue _fun0005 }
case 7:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0005_ip = 28; continue _fun0005 }
case 14:
                    var5 = _closure1_slot5;
                    var3 = _closure2_slot0;
                    var4 = var3.type;
                    var3 = undefined;
                    var2 = var5.bind(var3)(var4, var6);
case 28:
                    var1 = var2;
case 27:
                    return var1;
                }
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.find;
            var2 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.channel;
                    var4 = var1.id;
                    var2 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0006_ip = 29; continue _fun0006 }
case 7:
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4 === var2;
case 29:
                    if(!var1) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                    var2 = arg2;
                    _closure2_slot2 = var2;
                    var1 = true;
case 30:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var1 = _closure2_slot2;
            return var1;
case 25:
            var1 = 0;
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function hoverSameType(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.id;
        var1['referenceId'] = var3;
        var2 = var2.parent_id;
        var1['parentId'] = var2;
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var8 = var5.isGuildSelectableChannelType;
    var _closure1_slot2 = var8;
    var5 = var5.isGuildVocalChannelType;
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ChannelTypes;
    var _closure1_slot4 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/ChannelSortingUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['areTypesInSameSection'] = var4;
    var4 = function getDropData(arg1, arg2, arg3, arg4, arg5) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var8 = arg1;
            var5 = arg2;
            var6 = arg3;
            var3 = arg4;
            var14 = arg5;
            var1 = null;
            if(!(var1 != var8)) { _fun0007_ip = 32; continue _fun0007 }
case 33:
            if(!(var1 != var6)) { _fun0007_ip = 32; continue _fun0007 }
case 34:
            var2 = _closure1_slot4;
            var10 = var2.GUILD_CATEGORY;
            var2 = var8.type;
            if(!(var2 !== var10)) { _fun0007_ip = 35; continue _fun0007 }
case 17:
            var11 = _closure1_slot5;
            var7 = var8.type;
            var2 = var6.type;
            var9 = undefined;
            var2 = var11.bind(var9)(var7, var2);
            if(var2) { _fun0007_ip = 36; continue _fun0007 }
case 37:
            if(!(!(var3 < var5))) { _fun0007_ip = 38; continue _fun0007 }
case 39:
            var2 = var6.type;
            if(!(var2 !== var10)) { _fun0007_ip = 40; continue _fun0007 }
case 41:
            var7 = _closure1_slot7;
            var2 = true;
            var2 = var7.bind(var9)(var6, var14, var2);
            var11 = var1 != var2;
            var7 = 0;
            if(!var11) { _fun0007_ip = 16; continue _fun0007 }
case 42:
            var7 = var2;
case 16:
            var2 = 1;
            var2 = var7 + var2;
            var12 = var14[var2];
            var13 = _closure1_slot6;
            var19 = var6.id;
            var18 = var8.type;
            var20 = -1;
            var21 = undefined;
            var17 = var14;
            var11 = var21[var13](var20, var19, var18, var17, var16);
            var7 = var1 == var11;
            var2 = null;
            if(var7) { _fun0007_ip = 43; continue _fun0007 }
case 44:
            var7 = var8.isGuildVocal;
            var7 = var7.bind(var8)();
            if(!var7) { _fun0007_ip = 45; continue _fun0007 }
case 46:
            if(!(var1 != var12)) { _fun0007_ip = 47; continue _fun0007 }
case 48:
            var13 = var12.channel;
            var7 = var13.isCategory;
            var7 = var7.bind(var13)();
            if(var7) { _fun0007_ip = 47; continue _fun0007 }
case 49:
            var13 = var12.channel;
            var7 = var13.isGuildVocal;
            var7 = var7.bind(var13)();
            if(var7) { _fun0007_ip = 50; continue _fun0007 }
case 45:
            var7 = var8.isCategory;
            var13 = var7.bind(var8)();
            var7 = null;
            if(!var13) { _fun0007_ip = 51; continue _fun0007 }
case 52:
            if(!(var1 != var12)) { _fun0007_ip = 53; continue _fun0007 }
case 54:
            var15 = var12.channel;
            var13 = var15.isCategory;
            var13 = var13.bind(var15)();
            var7 = null;
            if(!var13) { _fun0007_ip = 51; continue _fun0007 }
case 53:
            var13 = {};
            var15 = var11.channel;
            var15 = var15.id;
            var13['referenceId'] = var15;
            var13['parentId'] = var1;
            var7 = var13;
case 51:
            var2 = var7;
            _fun0007_ip = 43; continue _fun0007;
case 50:
            var7 = {};
            var13 = var11.channel;
            var13 = var13.id;
            var7['referenceId'] = var13;
            var12 = var12.channel;
            var12 = var12.parent_id;
            var7['parentId'] = var12;
            var2 = var7;
            _fun0007_ip = 43; continue _fun0007;
case 47:
            var7 = {};
            var11 = var11.channel;
            var11 = var11.id;
            var7['referenceId'] = var11;
            var11 = var6.parent_id;
            var7['parentId'] = var11;
            var2 = var7;
case 43:
            _fun0007_ip = 55; continue _fun0007;
case 40:
            var11 = _closure1_slot7;
            var7 = true;
            var7 = var11.bind(var9)(var6, var14, var7);
            var12 = var1 != var7;
            var11 = 0;
            if(!var12) { _fun0007_ip = 56; continue _fun0007 }
case 57:
            var11 = var7;
case 56:
            var7 = 1;
            var7 = var11 + var7;
            var13 = var14[var7];
            var15 = _closure1_slot6;
            var19 = var6.id;
            var18 = var8.type;
            var20 = -1;
            var21 = undefined;
            var17 = var14;
            var12 = var21[var15](var20, var19, var18, var17, var16);
            var11 = var1 != var12;
            var7 = null;
            if(!var11) { _fun0007_ip = 58; continue _fun0007 }
case 59:
            if(!(var1 != var13)) { _fun0007_ip = 60; continue _fun0007 }
case 61:
            var16 = _closure1_slot5;
            var11 = var13.channel;
            var15 = var11.type;
            var11 = var8.type;
            var11 = var16.bind(var9)(var15, var11);
            if(var11) { _fun0007_ip = 62; continue _fun0007 }
case 63:
            var15 = _closure1_slot2;
            var11 = var8.type;
            var11 = var15.bind(var9)(var11);
            if(!var11) { _fun0007_ip = 64; continue _fun0007 }
case 65:
            var15 = var13.channel;
            var11 = var15.isGuildVocal;
            var11 = var11.bind(var15)();
            if(var11) { _fun0007_ip = 62; continue _fun0007 }
case 64:
            var15 = var13.channel;
            var11 = var15.isCategory;
            var11 = var11.bind(var15)();
            var7 = null;
            if(!var11) { _fun0007_ip = 58; continue _fun0007 }
case 66:
            var11 = {};
            var15 = var12.channel;
            var15 = var15.id;
            var11['referenceId'] = var15;
            var15 = var6.id;
            var11['parentId'] = var15;
            var7 = var11;
            _fun0007_ip = 58; continue _fun0007;
case 62:
            var11 = {};
            var15 = var12.channel;
            var15 = var15.id;
            var11['referenceId'] = var15;
            var13 = var13.channel;
            var13 = var13.parent_id;
            var11['parentId'] = var13;
            var7 = var11;
            _fun0007_ip = 58; continue _fun0007;
case 60:
            var11 = {};
            var12 = var12.channel;
            var12 = var12.id;
            var11['referenceId'] = var12;
            var12 = var6.id;
            var11['parentId'] = var12;
            var7 = var11;
case 58:
            var2 = var7;
case 55:
            _fun0007_ip = 67; continue _fun0007;
case 38:
            var7 = var6.type;
            if(!(var7 !== var10)) { _fun0007_ip = 68; continue _fun0007 }
case 69:
            var10 = _closure1_slot7;
            var7 = true;
            var10 = var10.bind(var9)(var6, var14, var7);
            var11 = var1 != var10;
            var7 = 0;
            if(!var11) { _fun0007_ip = 70; continue _fun0007 }
case 71:
            var7 = var10;
case 70:
            var13 = 1;
            var7 = var7 - var13;
            var11 = var14[var7];
            var12 = _closure1_slot6;
            var19 = var6.id;
            var18 = var8.type;
            var21 = undefined;
            var20 = var13;
            var17 = var14;
            var12 = var21[var12](var20, var19, var18, var17, var16);
            if(!(var1 == var11)) { _fun0007_ip = 72; continue _fun0007 }
case 73:
            var7 = var8.isGuildVocal;
            var7 = var7.bind(var8)();
            if(var7) { _fun0007_ip = 72; continue _fun0007 }
case 74:
            var7 = {};
            var13 = var1 != var12;
            var10 = null;
            if(!var13) { _fun0007_ip = 75; continue _fun0007 }
case 76:
            var13 = var12.channel;
            var10 = var13.id;
case 75:
            var7['referenceId'] = var10;
            var7['parentId'] = var1;
            _fun0007_ip = 77; continue _fun0007;
case 72:
            var13 = _closure1_slot2;
            var10 = var8.type;
            var13 = var13.bind(var9)(var10);
            var10 = null;
            if(!var13) { _fun0007_ip = 78; continue _fun0007 }
case 79:
            var13 = var1 != var12;
            var10 = null;
            if(!var13) { _fun0007_ip = 78; continue _fun0007 }
case 80:
            var15 = _closure1_slot2;
            var13 = var11.channel;
            var13 = var13.type;
            var13 = var15.bind(var9)(var13);
            if(var13) { _fun0007_ip = 81; continue _fun0007 }
case 82:
            var13 = var11.channel;
            var11 = var13.isCategory;
            var11 = var11.bind(var13)();
            var10 = null;
            if(!var11) { _fun0007_ip = 78; continue _fun0007 }
case 81:
            var11 = {};
            var12 = var12.channel;
            var12 = var12.id;
            var11['referenceId'] = var12;
            var12 = var6.parent_id;
            var11['parentId'] = var12;
            var10 = var11;
case 78:
            var7 = var10;
case 77:
            _fun0007_ip = 83; continue _fun0007;
case 68:
            var11 = _closure1_slot7;
            var10 = true;
            var11 = var11.bind(var9)(var6, var14, var10);
            var12 = var1 != var11;
            var10 = 0;
            if(!var12) { _fun0007_ip = 84; continue _fun0007 }
case 85:
            var10 = var11;
case 84:
            var15 = 1;
            var10 = var10 - var15;
            var12 = var14[var10];
            var13 = _closure1_slot6;
            var19 = var6.id;
            var18 = var8.type;
            var21 = undefined;
            var20 = var15;
            var17 = var14;
            var13 = var21[var13](var20, var19, var18, var17, var16);
            if(!(var1 != var12)) { _fun0007_ip = 86; continue _fun0007 }
case 87:
            var11 = var1 != var13;
            var10 = null;
            if(!var11) { _fun0007_ip = 88; continue _fun0007 }
case 89:
            var16 = _closure1_slot5;
            var11 = var12.channel;
            var15 = var11.type;
            var11 = var8.type;
            var11 = var16.bind(var9)(var15, var11);
            if(var11) { _fun0007_ip = 90; continue _fun0007 }
case 91:
            var11 = var8.isGuildVocal;
            var11 = var11.bind(var8)();
            if(!var11) { _fun0007_ip = 92; continue _fun0007 }
case 93:
            var15 = _closure1_slot2;
            var11 = var12.channel;
            var11 = var11.type;
            var11 = var15.bind(var9)(var11);
            if(var11) { _fun0007_ip = 90; continue _fun0007 }
case 92:
            var15 = var12.channel;
            var11 = var15.isCategory;
            var11 = var11.bind(var15)();
            var10 = null;
            if(!var11) { _fun0007_ip = 88; continue _fun0007 }
case 94:
            var11 = {};
            var15 = var13.channel;
            var15 = var15.id;
            var11['referenceId'] = var15;
            var15 = var12.channel;
            var15 = var15.id;
            var11['parentId'] = var15;
            var10 = var11;
            _fun0007_ip = 88; continue _fun0007;
case 90:
            var11 = {};
            var13 = var13.channel;
            var13 = var13.id;
            var11['referenceId'] = var13;
            var12 = var12.channel;
            var12 = var12.parent_id;
            var11['parentId'] = var12;
            var10 = var11;
            _fun0007_ip = 88; continue _fun0007;
case 86:
            var10 = {'referenceId': null, 'parentId': null};
case 88:
            var7 = var10;
case 83:
            var2 = var7;
case 67:
            _fun0007_ip = 95; continue _fun0007;
case 36:
            var7 = _closure1_slot8;
            var2 = var7.bind(var9)(var6);
case 95:
            _fun0007_ip = 96; continue _fun0007;
case 35:
            if(!(var3 !== var5)) { _fun0007_ip = 97; continue _fun0007 }
case 98:
            if(!(var3 < var5)) { _fun0007_ip = 99; continue _fun0007 }
case 100:
            var9 = var8.type;
            var7 = var6.type;
            if(!(var9 !== var7)) { _fun0007_ip = 97; continue _fun0007 }
case 99:
            var5 = var3 > var5;
            var3 = null;
            if(!var5) { _fun0007_ip = 101; continue _fun0007 }
case 102:
            var5 = _closure1_slot4;
            var10 = var5.GUILD_CATEGORY;
            var7 = _closure1_slot7;
            var13 = undefined;
            var5 = true;
            var5 = var7.bind(var13)(var6, var14, var5);
            var9 = var1 != var5;
            var7 = 0;
            if(!var9) { _fun0007_ip = 103; continue _fun0007 }
case 104:
            var7 = var5;
case 103:
            var5 = 1;
            var5 = var7 + var5;
            var7 = var14[var5];
            var12 = _closure1_slot6;
            var19 = var6.id;
            var18 = var8.type;
            var20 = -1;
            var21 = undefined;
            var17 = var14;
            var9 = var21[var12](var20, var19, var18, var17, var16);
            var11 = var1 == var9;
            var5 = null;
            if(var11) { _fun0007_ip = 105; continue _fun0007 }
case 106:
            var11 = var9.channel;
            var11 = var11.id;
            var8 = var8.id;
            var5 = null;
            if(!(var11 !== var8)) { _fun0007_ip = 105; continue _fun0007 }
case 107:
            if(!(var1 != var7)) { _fun0007_ip = 108; continue _fun0007 }
case 109:
            var7 = var7.channel;
            var8 = var7.type;
            var7 = null;
            if(!(var8 === var10)) { _fun0007_ip = 110; continue _fun0007 }
case 108:
            var8 = {};
            var9 = var9.channel;
            var9 = var9.id;
            var8['referenceId'] = var9;
            var8['parentId'] = var1;
            var7 = var8;
case 110:
            var5 = var7;
case 105:
            var3 = var5;
case 101:
            _fun0007_ip = 111; continue _fun0007;
case 97:
            var5 = _closure1_slot8;
            var4 = undefined;
            var3 = var5.bind(var4)(var6);
case 111:
            var2 = var3;
case 96:
            return var2;
case 32:
            return var1;
        }
    };
    var3['getDropData'] = var4;
    var2 = function getDnDUpdates(arg1, arg2, arg3, arg4) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var6 = arg1;
            var8 = arg2;
            var5 = arg3;
            var11 = arg4;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var5;
            var2 = new Array(0);
            var _closure2_slot4 = var2;
            var2 = new Array(0);
            var9 = var11._categories;
            var4 = function generateUpdates(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var9 = arg1;
                    var1 = _closure2_slot2;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0009_ip = 10; continue _fun0009 }
case 112:
                    var1 = _closure2_slot3;
                    if(!(var4 != var1)) { _fun0009_ip = 10; continue _fun0009 }
case 113:
                    var6 = _closure2_slot0;
                    var5 = _closure2_slot2;
                    var2 = _closure2_slot3;
                    var1 = var4 != var5;
                    if(!var1) { _fun0009_ip = 114; continue _fun0009 }
case 31:
                    var1 = var4 != var2;
case 114:
                    if(!var1) { _fun0009_ip = 28; continue _fun0009 }
case 115:
                    var7 = var9[var5];
                    var1 = var4 != var7;
case 28:
                    if(!var1) { _fun0009_ip = 116; continue _fun0009 }
case 27:
                    var5 = var9[var5];
                    var5 = var5.channel;
                    var1 = var5 === var6;
case 116:
                    if(!var1) { _fun0009_ip = 12; continue _fun0009 }
case 117:
                    var2 = var9[var2];
                    var1 = var4 != var2;
case 12:
                    if(var1) { _fun0009_ip = 118; continue _fun0009 }
case 10:
                    var1 = new Array(0);
                    var10 = 0;
                    var12 = var1;
                    var11 = var9;
                    var2 = arraySpread(var12, var11, var10);
                    _fun0009_ip = 119; continue _fun0009;
case 118:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 2;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.moveItemFromTo;
                    var4 = _closure2_slot2;
                    var2 = _closure2_slot3;
                    var1 = var5.bind(var6)(var9, var4, var2);
case 119:
                    var5 = _closure2_slot4;
                    var4 = var5.concat;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 2;
                    var6 = var6[var2];
                    var2 = undefined;
                    var7 = var7.bind(var2)(var6);
                    var6 = var7.calculatePositionDeltas;
                    var2 = {};
                    var2['oldOrdering'] = var9;
                    var2['newOrdering'] = var1;
                    var9 = function idGetter(arg1) {
                        var1 = arg1;
                        var1 = var1.channel;
                        var1 = var1.id;
                        return var1;
                    };
                    var2['idGetter'] = var9;
                    var8 = function existingPositionGetter(arg1) {
                        var1 = arg1;
                        var1 = var1.channel;
                        var1 = var1.position;
                        return var1;
                    };
                    var2['existingPositionGetter'] = var8;
                    var2 = var6.bind(var7)(var2);
                    var2 = var4.bind(var5)(var2);
                    _closure2_slot4 = var2;
                    return var1;
                }
            };
            var3 = var6.isCategory;
            var3 = var3.bind(var6)();
            if(!var3) { _fun0008_ip = 120; continue _fun0008 }
case 28:
            var12 = new Array(0);
            var7 = 0;
            var17 = var12;
            var16 = var9;
            var15 = 0;
            var3 = arraySpread(var17, var16, var15);
            var10 = var12.slice;
            var3 = 1;
            var10 = var10.bind(var12)(var3);
            var12 = _closure1_slot7;
            var3 = undefined;
            var13 = var12.bind(var3)(var6, var10);
            var _closure2_slot2 = var13;
            var12 = var12.bind(var3)(var8, var10);
            var _closure2_slot3 = var12;
            var3 = var4.bind(var3)(var10);
            var10 = var3.unshift;
            var7 = var9[var7];
            var7 = var10.bind(var3)(var7);
            var2 = var3;
case 120:
            var12 = _closure1_slot2;
            var10 = var6.type;
            var3 = undefined;
            var10 = var12.bind(var3)(var10);
            if(var10) { _fun0008_ip = 121; continue _fun0008 }
case 122:
            var10 = var6.isCategory;
            var10 = var10.bind(var6)();
            if(!var10) { _fun0008_ip = 54; continue _fun0008 }
case 121:
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var10 = 3;
            var10 = var13[var10];
            var13 = var12.bind(var3)(var10);
            var14 = var2.length;
            var10 = 0;
            var12 = var9;
            if(!(var14 > var10)) { _fun0008_ip = 123; continue _fun0008 }
case 124:
            var12 = var2;
case 123:
            var10 = function(arg1) {
                var1 = arg1;
                var1 = var1.channel;
                var3 = var1.type;
                var2 = _closure1_slot2;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var10 = var13.bind(var3)(var12, var11, var10);
            var12 = _closure1_slot7;
            var13 = var12.bind(var3)(var6, var10);
            _closure2_slot2 = var13;
            var12 = var12.bind(var3)(var8, var10);
            _closure2_slot3 = var12;
            var10 = var4.bind(var3)(var10);
case 54:
            var10 = var6.isGuildVocal;
            var10 = var10.bind(var6)();
            if(var10) { _fun0008_ip = 125; continue _fun0008 }
case 126:
            var10 = var6.isCategory;
            var10 = var10.bind(var6)();
            if(!var10) { _fun0008_ip = 127; continue _fun0008 }
case 125:
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var10 = 3;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var13 = var2.length;
            var12 = 0;
            if(!(var13 > var12)) { _fun0008_ip = 128; continue _fun0008 }
case 129:
            var9 = var2;
case 128:
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.channel;
                var1 = var2.isGuildVocal;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var10.bind(var3)(var9, var11, var2);
            var7 = _closure1_slot7;
            var9 = var7.bind(var3)(var6, var2);
            _closure2_slot2 = var9;
            var7 = var7.bind(var3)(var8, var2);
            _closure2_slot3 = var7;
            var2 = var4.bind(var3)(var2);
case 127:
            var2 = var6.parent_id;
            if(!(var2 !== var5)) { _fun0008_ip = 130; continue _fun0008 }
case 131:
            var2 = false;
            var _closure2_slot5 = var2;
            var4 = _closure2_slot4;
            var3 = var4.find;
            var2 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4.id;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2 === var1;
                    if(!var1) { _fun0010_ip = 31; continue _fun0010 }
case 15:
                    var2 = _closure2_slot1;
                    var4['parent_id'] = var2;
                    var2 = true;
                    _closure2_slot5 = var2;
                    var1 = true;
case 31:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var2 = _closure2_slot5;
            if(var2) { _fun0008_ip = 130; continue _fun0008 }
case 132:
            var4 = _closure2_slot4;
            var3 = var4.push;
            var2 = {};
            var6 = var6.id;
            var2['id'] = var6;
            var2['parent_id'] = var5;
            var2 = var3.bind(var4)(var2);
case 130:
            var1 = _closure2_slot4;
            return var1;
        }
    };
    var3['getDnDUpdates'] = var2;
    return var1;
})();
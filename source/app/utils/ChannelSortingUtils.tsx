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
 0:
            var7 = arg1;
            var6 = arg2;
            var2 = null;
            var1 = var2 != var7;
            if(!var1) { _fun0001_ip = 19; continue _fun0001 }
 15:
            var1 = var2 != var6;
 19:
            if(!var1) { _fun0001_ip = 93; continue _fun0001 }
 22:
            var2 = var7 === var6;
            if(var2) { _fun0001_ip = 58; continue _fun0001 }
 29:
            var3 = _closure1_slot2;
            var5 = undefined;
            var3 = var3.bind(var5)(var7);
            if(!var3) { _fun0001_ip = 55; continue _fun0001 }
 46:
            var4 = _closure1_slot2;
            var3 = var4.bind(var5)(var6);
 55:
            var2 = var3;
 58:
            if(var2) { _fun0001_ip = 90; continue _fun0001 }
 61:
            var3 = _closure1_slot3;
            var5 = undefined;
            var3 = var3.bind(var5)(var7);
            if(!var3) { _fun0001_ip = 87; continue _fun0001 }
 78:
            var4 = _closure1_slot3;
            var3 = var4.bind(var5)(var6);
 87:
            var2 = var3;
 90:
            var1 = var2;
 93:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = function getFirstChannelOfType(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
 0:
                    var1 = arg1;
                    var1 = var1.channel;
                    var2 = var1.id;
                    var1 = _closure2_slot0;
                    var1 = var2 === var1;
                    if(!var1) { _fun0003_ip = 36; continue _fun0003 }
 27:
                    var2 = arg2;
                    _closure2_slot1 = var2;
                    var1 = true;
 36:
                    return var1;
                }
            };
            var2 = var3.bind(var7)(var2);
            var2 = _closure2_slot1;
            var6 = 0;
            if(!(!(var2 < var6))) { _fun0002_ip = 128; continue _fun0002 }
 56:
            var5 = _closure2_slot1;
            if(!(var5 >= var6)) { _fun0002_ip = 122; continue _fun0002 }
 64:
            var1 = var7.length;
            var3 = undefined;
            if(!(var5 < var1)) { _fun0002_ip = 122; continue _fun0002 }
 78:
            var1 = var7[var5];
            var10 = _closure1_slot5;
            var2 = var1.channel;
            var2 = var2.type;
            var2 = var10.bind(var3)(var2, var8);
            if(var2) { _fun0002_ip = 126; continue _fun0002 }
 105:
            var5 = var5 + var9;
            if(!(var5 >= var6)) { _fun0002_ip = 122; continue _fun0002 }
 113:
            var2 = var7.length;
            if(var5 < var2) { _fun0002_ip = 78; continue _fun0002 }
 122:
            var2 = null;
            return var2;
 126:
            return var1;
 128:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function getChannelPosition(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var4 = arg2;
            var5 = arguments[2];
            var _closure2_slot0 = var3;
            var2 = undefined;
            if(!(var5 === var2)) { _fun0004_ip = 23; continue _fun0004 }
 21:
            var5 = false;
 23:
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var2;
            var2 = null;
            if(!(var2 != var3)) { _fun0004_ip = 82; continue _fun0004 }
 37:
            _closure2_slot2 = var2;
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.channel;
                    var6 = var1.type;
                    var2 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0005_ip = 63; continue _fun0005 }
 29:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0005_ip = 60; continue _fun0005 }
 36:
                    var5 = _closure1_slot5;
                    var3 = _closure2_slot0;
                    var4 = var3.type;
                    var3 = undefined;
                    var2 = var5.bind(var3)(var4, var6);
 60:
                    var1 = var2;
 63:
                    return var1;
                }
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.find;
            var2 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.channel;
                    var4 = var1.id;
                    var2 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0006_ip = 42; continue _fun0006 }
 29:
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4 === var2;
 42:
                    if(!var1) { _fun0006_ip = 54; continue _fun0006 }
 45:
                    var2 = arg2;
                    _closure2_slot2 = var2;
                    var1 = true;
 54:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var1 = _closure2_slot2;
            return var1;
 82:
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
 0:
            var8 = arg1;
            var5 = arg2;
            var6 = arg3;
            var3 = arg4;
            var14 = arg5;
            var1 = null;
            if(!(var1 != var8)) { _fun0007_ip = 1377; continue _fun0007 }
 24:
            if(!(var1 != var6)) { _fun0007_ip = 1377; continue _fun0007 }
 31:
            var2 = _closure1_slot4;
            var10 = var2.GUILD_CATEGORY;
            var2 = var8.type;
            if(!(var2 !== var10)) { _fun0007_ip = 1161; continue _fun0007 }
 56:
            var11 = _closure1_slot5;
            var7 = var8.type;
            var2 = var6.type;
            var9 = undefined;
            var2 = var11.bind(var9)(var7, var2);
            if(var2) { _fun0007_ip = 1147; continue _fun0007 }
 84:
            if(!(!(var3 < var5))) { _fun0007_ip = 657; continue _fun0007 }
 91:
            var2 = var6.type;
            if(!(var2 !== var10)) { _fun0007_ip = 382; continue _fun0007 }
 103:
            var7 = _closure1_slot7;
            var2 = true;
            var2 = var7.bind(var9)(var6, var14, var2);
            var11 = var1 != var2;
            var7 = 0;
            if(!var11) { _fun0007_ip = 128; continue _fun0007 }
 125:
            var7 = var2;
 128:
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
            if(var7) { _fun0007_ip = 377; continue _fun0007 }
 180:
            var7 = var8.isGuildVocal;
            var7 = var7.bind(var8)();
            if(!var7) { _fun0007_ip = 239; continue _fun0007 }
 193:
            if(!(var1 != var12)) { _fun0007_ip = 346; continue _fun0007 }
 200:
            var13 = var12.channel;
            var7 = var13.isCategory;
            var7 = var7.bind(var13)();
            if(var7) { _fun0007_ip = 346; continue _fun0007 }
 221:
            var13 = var12.channel;
            var7 = var13.isGuildVocal;
            var7 = var7.bind(var13)();
            if(var7) { _fun0007_ip = 308; continue _fun0007 }
 239:
            var7 = var8.isCategory;
            var13 = var7.bind(var8)();
            var7 = null;
            if(!var13) { _fun0007_ip = 303; continue _fun0007 }
 254:
            if(!(var1 != var12)) { _fun0007_ip = 278; continue _fun0007 }
 258:
            var15 = var12.channel;
            var13 = var15.isCategory;
            var13 = var13.bind(var15)();
            var7 = null;
            if(!var13) { _fun0007_ip = 303; continue _fun0007 }
 278:
            var13 = {};
            var15 = var11.channel;
            var15 = var15.id;
            var13['referenceId'] = var15;
            var13['parentId'] = var1;
            var7 = var13;
 303:
            var2 = var7;
            _fun0007_ip = 377; continue _fun0007;
 308:
            var7 = {};
            var13 = var11.channel;
            var13 = var13.id;
            var7['referenceId'] = var13;
            var12 = var12.channel;
            var12 = var12.parent_id;
            var7['parentId'] = var12;
            var2 = var7;
            _fun0007_ip = 377; continue _fun0007;
 346:
            var7 = {};
            var11 = var11.channel;
            var11 = var11.id;
            var7['referenceId'] = var11;
            var11 = var6.parent_id;
            var7['parentId'] = var11;
            var2 = var7;
 377:
            _fun0007_ip = 652; continue _fun0007;
 382:
            var11 = _closure1_slot7;
            var7 = true;
            var7 = var11.bind(var9)(var6, var14, var7);
            var12 = var1 != var7;
            var11 = 0;
            if(!var12) { _fun0007_ip = 407; continue _fun0007 }
 404:
            var11 = var7;
 407:
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
            if(!var11) { _fun0007_ip = 649; continue _fun0007 }
 459:
            if(!(var1 != var13)) { _fun0007_ip = 619; continue _fun0007 }
 466:
            var16 = _closure1_slot5;
            var11 = var13.channel;
            var15 = var11.type;
            var11 = var8.type;
            var11 = var16.bind(var9)(var15, var11);
            if(var11) { _fun0007_ip = 581; continue _fun0007 }
 494:
            var15 = _closure1_slot2;
            var11 = var8.type;
            var11 = var15.bind(var9)(var11);
            if(!var11) { _fun0007_ip = 529; continue _fun0007 }
 511:
            var15 = var13.channel;
            var11 = var15.isGuildVocal;
            var11 = var11.bind(var15)();
            if(var11) { _fun0007_ip = 581; continue _fun0007 }
 529:
            var15 = var13.channel;
            var11 = var15.isCategory;
            var11 = var11.bind(var15)();
            var7 = null;
            if(!var11) { _fun0007_ip = 649; continue _fun0007 }
 549:
            var11 = {};
            var15 = var12.channel;
            var15 = var15.id;
            var11['referenceId'] = var15;
            var15 = var6.id;
            var11['parentId'] = var15;
            var7 = var11;
            _fun0007_ip = 649; continue _fun0007;
 581:
            var11 = {};
            var15 = var12.channel;
            var15 = var15.id;
            var11['referenceId'] = var15;
            var13 = var13.channel;
            var13 = var13.parent_id;
            var11['parentId'] = var13;
            var7 = var11;
            _fun0007_ip = 649; continue _fun0007;
 619:
            var11 = {};
            var12 = var12.channel;
            var12 = var12.id;
            var11['referenceId'] = var12;
            var12 = var6.id;
            var11['parentId'] = var12;
            var7 = var11;
 649:
            var2 = var7;
 652:
            _fun0007_ip = 1145; continue _fun0007;
 657:
            var7 = var6.type;
            if(!(var7 !== var10)) { _fun0007_ip = 890; continue _fun0007 }
 669:
            var10 = _closure1_slot7;
            var7 = true;
            var10 = var10.bind(var9)(var6, var14, var7);
            var11 = var1 != var10;
            var7 = 0;
            if(!var11) { _fun0007_ip = 694; continue _fun0007 }
 691:
            var7 = var10;
 694:
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
            if(!(var1 == var11)) { _fun0007_ip = 781; continue _fun0007 }
 735:
            var7 = var8.isGuildVocal;
            var7 = var7.bind(var8)();
            if(var7) { _fun0007_ip = 781; continue _fun0007 }
 748:
            var7 = {};
            var13 = var1 != var12;
            var10 = null;
            if(!var13) { _fun0007_ip = 769; continue _fun0007 }
 759:
            var13 = var12.channel;
            var10 = var13.id;
 769:
            var7['referenceId'] = var10;
            var7['parentId'] = var1;
            _fun0007_ip = 885; continue _fun0007;
 781:
            var13 = _closure1_slot2;
            var10 = var8.type;
            var13 = var13.bind(var9)(var10);
            var10 = null;
            if(!var13) { _fun0007_ip = 882; continue _fun0007 }
 800:
            var13 = var1 != var12;
            var10 = null;
            if(!var13) { _fun0007_ip = 882; continue _fun0007 }
 809:
            var15 = _closure1_slot2;
            var13 = var11.channel;
            var13 = var13.type;
            var13 = var15.bind(var9)(var13);
            if(var13) { _fun0007_ip = 851; continue _fun0007 }
 831:
            var13 = var11.channel;
            var11 = var13.isCategory;
            var11 = var11.bind(var13)();
            var10 = null;
            if(!var11) { _fun0007_ip = 882; continue _fun0007 }
 851:
            var11 = {};
            var12 = var12.channel;
            var12 = var12.id;
            var11['referenceId'] = var12;
            var12 = var6.parent_id;
            var11['parentId'] = var12;
            var10 = var11;
 882:
            var7 = var10;
 885:
            _fun0007_ip = 1142; continue _fun0007;
 890:
            var11 = _closure1_slot7;
            var10 = true;
            var11 = var11.bind(var9)(var6, var14, var10);
            var12 = var1 != var11;
            var10 = 0;
            if(!var12) { _fun0007_ip = 915; continue _fun0007 }
 912:
            var10 = var11;
 915:
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
            if(!(var1 != var12)) { _fun0007_ip = 1129; continue _fun0007 }
 959:
            var11 = var1 != var13;
            var10 = null;
            if(!var11) { _fun0007_ip = 1139; continue _fun0007 }
 971:
            var16 = _closure1_slot5;
            var11 = var12.channel;
            var15 = var11.type;
            var11 = var8.type;
            var11 = var16.bind(var9)(var15, var11);
            if(var11) { _fun0007_ip = 1091; continue _fun0007 }
 999:
            var11 = var8.isGuildVocal;
            var11 = var11.bind(var8)();
            if(!var11) { _fun0007_ip = 1034; continue _fun0007 }
 1012:
            var15 = _closure1_slot2;
            var11 = var12.channel;
            var11 = var11.type;
            var11 = var15.bind(var9)(var11);
            if(var11) { _fun0007_ip = 1091; continue _fun0007 }
 1034:
            var15 = var12.channel;
            var11 = var15.isCategory;
            var11 = var11.bind(var15)();
            var10 = null;
            if(!var11) { _fun0007_ip = 1139; continue _fun0007 }
 1054:
            var11 = {};
            var15 = var13.channel;
            var15 = var15.id;
            var11['referenceId'] = var15;
            var15 = var12.channel;
            var15 = var15.id;
            var11['parentId'] = var15;
            var10 = var11;
            _fun0007_ip = 1139; continue _fun0007;
 1091:
            var11 = {};
            var13 = var13.channel;
            var13 = var13.id;
            var11['referenceId'] = var13;
            var12 = var12.channel;
            var12 = var12.parent_id;
            var11['parentId'] = var12;
            var10 = var11;
            _fun0007_ip = 1139; continue _fun0007;
 1129:
            var10 = {'referenceId': null, 'parentId': null};
 1139:
            var7 = var10;
 1142:
            var2 = var7;
 1145:
            _fun0007_ip = 1156; continue _fun0007;
 1147:
            var7 = _closure1_slot8;
            var2 = var7.bind(var9)(var6);
 1156:
            _fun0007_ip = 1375; continue _fun0007;
 1161:
            if(!(var3 !== var5)) { _fun0007_ip = 1361; continue _fun0007 }
 1168:
            if(!(var3 < var5)) { _fun0007_ip = 1189; continue _fun0007 }
 1172:
            var9 = var8.type;
            var7 = var6.type;
            if(!(var9 !== var7)) { _fun0007_ip = 1361; continue _fun0007 }
 1189:
            var5 = var3 > var5;
            var3 = null;
            if(!var5) { _fun0007_ip = 1359; continue _fun0007 }
 1201:
            var5 = _closure1_slot4;
            var10 = var5.GUILD_CATEGORY;
            var7 = _closure1_slot7;
            var13 = undefined;
            var5 = true;
            var5 = var7.bind(var13)(var6, var14, var5);
            var9 = var1 != var5;
            var7 = 0;
            if(!var9) { _fun0007_ip = 1238; continue _fun0007 }
 1235:
            var7 = var5;
 1238:
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
            if(var11) { _fun0007_ip = 1356; continue _fun0007 }
 1287:
            var11 = var9.channel;
            var11 = var11.id;
            var8 = var8.id;
            var5 = null;
            if(!(var11 !== var8)) { _fun0007_ip = 1356; continue _fun0007 }
 1308:
            if(!(var1 != var7)) { _fun0007_ip = 1328; continue _fun0007 }
 1312:
            var7 = var7.channel;
            var8 = var7.type;
            var7 = null;
            if(!(var8 === var10)) { _fun0007_ip = 1353; continue _fun0007 }
 1328:
            var8 = {};
            var9 = var9.channel;
            var9 = var9.id;
            var8['referenceId'] = var9;
            var8['parentId'] = var1;
            var7 = var8;
 1353:
            var5 = var7;
 1356:
            var3 = var5;
 1359:
            _fun0007_ip = 1372; continue _fun0007;
 1361:
            var5 = _closure1_slot8;
            var4 = undefined;
            var3 = var5.bind(var4)(var6);
 1372:
            var2 = var3;
 1375:
            return var2;
 1377:
            return var1;
        }
    };
    var3['getDropData'] = var4;
    var2 = function getDnDUpdates(arg1, arg2, arg3, arg4) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
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
 0:
                    var9 = arg1;
                    var1 = _closure2_slot2;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0009_ip = 90; continue _fun0009 }
 18:
                    var1 = _closure2_slot3;
                    if(!(var4 != var1)) { _fun0009_ip = 90; continue _fun0009 }
 26:
                    var6 = _closure2_slot0;
                    var5 = _closure2_slot2;
                    var2 = _closure2_slot3;
                    var1 = var4 != var5;
                    if(!var1) { _fun0009_ip = 49; continue _fun0009 }
 45:
                    var1 = var4 != var2;
 49:
                    if(!var1) { _fun0009_ip = 60; continue _fun0009 }
 52:
                    var7 = var9[var5];
                    var1 = var4 != var7;
 60:
                    if(!var1) { _fun0009_ip = 76; continue _fun0009 }
 63:
                    var5 = var9[var5];
                    var5 = var5.channel;
                    var1 = var5 === var6;
 76:
                    if(!var1) { _fun0009_ip = 87; continue _fun0009 }
 79:
                    var2 = var9[var2];
                    var1 = var4 != var2;
 87:
                    if(var1) { _fun0009_ip = 108; continue _fun0009 }
 90:
                    var1 = new Array(0);
                    var10 = 0;
                    var12 = var1;
                    var11 = var9;
                    var2 = arraySpread(var12, var11, var10);
                    _fun0009_ip = 154; continue _fun0009;
 108:
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
 154:
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
            if(!var3) { _fun0008_ip = 143; continue _fun0008 }
 60:
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
 143:
            var12 = _closure1_slot2;
            var10 = var6.type;
            var3 = undefined;
            var10 = var12.bind(var3)(var10);
            if(var10) { _fun0008_ip = 178; continue _fun0008 }
 165:
            var10 = var6.isCategory;
            var10 = var10.bind(var6)();
            if(!var10) { _fun0008_ip = 258; continue _fun0008 }
 178:
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var10 = 3;
            var10 = var13[var10];
            var13 = var12.bind(var3)(var10);
            var14 = var2.length;
            var10 = 0;
            var12 = var9;
            if(!(var14 > var10)) { _fun0008_ip = 215; continue _fun0008 }
 212:
            var12 = var2;
 215:
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
 258:
            var10 = var6.isGuildVocal;
            var10 = var10.bind(var6)();
            if(var10) { _fun0008_ip = 284; continue _fun0008 }
 271:
            var10 = var6.isCategory;
            var10 = var10.bind(var6)();
            if(!var10) { _fun0008_ip = 361; continue _fun0008 }
 284:
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var10 = 3;
            var10 = var13[var10];
            var10 = var12.bind(var3)(var10);
            var13 = var2.length;
            var12 = 0;
            if(!(var13 > var12)) { _fun0008_ip = 318; continue _fun0008 }
 315:
            var9 = var2;
 318:
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
 361:
            var2 = var6.parent_id;
            if(!(var2 !== var5)) { _fun0008_ip = 436; continue _fun0008 }
 371:
            var2 = false;
            var _closure2_slot5 = var2;
            var4 = _closure2_slot4;
            var3 = var4.find;
            var2 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var4 = arg1;
                    var2 = var4.id;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2 === var1;
                    if(!var1) { _fun0010_ip = 45; continue _fun0010 }
 27:
                    var2 = _closure2_slot1;
                    var4['parent_id'] = var2;
                    var2 = true;
                    _closure2_slot5 = var2;
                    var1 = true;
 45:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var2 = _closure2_slot5;
            if(var2) { _fun0008_ip = 436; continue _fun0008 }
 406:
            var4 = _closure2_slot4;
            var3 = var4.push;
            var2 = {};
            var6 = var6.id;
            var2['id'] = var6;
            var2['parent_id'] = var5;
            var2 = var3.bind(var4)(var2);
 436:
            var1 = _closure2_slot4;
            return var1;
        }
    };
    var3['getDnDUpdates'] = var2;
    return var1;
})();
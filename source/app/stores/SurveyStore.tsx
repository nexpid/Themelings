// app/stores/SurveyStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var1 = native4;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot27 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0002_ip = 344; continue _fun0002 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
 109:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
            var9 = _closure1_slot29;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0002_ip = 264; continue _fun0002;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0002_ip = 282; continue _fun0002;
 269:
            var7 = _closure1_slot29;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0002_ip = 322; continue _fun0002 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0003_ip = 67; continue _fun0003;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function isSurveyDataStale() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = _closure1_slot18;
            var3 = var1.lastFetched;
            var1 = null;
            var1 = var1 == var3;
            if(var1) { _fun0005_ip = 61; continue _fun0005 }
 22:
            var3 = global;
            var4 = var3.Date;
            var3 = var4.now;
            var4 = var3.bind(var4)();
            var3 = _closure1_slot18;
            var3 = var3.lastFetched;
            var3 = var4 - var3;
            var2 = _closure1_slot24;
            var1 = var3 >= var2;
 61:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var11 = function fetchSurveyIfNeeded() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = _closure1_slot23;
            if(var2) { _fun0006_ip = 45; continue _fun0006 }
 10:
            var4 = _closure1_slot30;
            var3 = undefined;
            var4 = var4.bind(var3)();
            var3 = !var4;
            if(var4) { _fun0006_ip = 42; continue _fun0006 }
 26:
            var4 = _closure1_slot18;
            var5 = var4.surveyOverride;
            var4 = null;
            var3 = var4 == var5;
 42:
            var2 = var3;
 45:
            if(var2) { _fun0006_ip = 98; continue _fun0006 }
 48:
            var4 = true;
            _closure1_slot23 = var4;
            var5 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 11;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.surveyFetch;
            var1 = _closure1_slot18;
            var1 = var1.surveyOverride;
            var1 = var2.bind(var3)(var1, var4);
 98:
            var1 = undefined;
            return var1;
        }
    };
    var1 = function meetsSurveyRequirements(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var30 = arg1;
            var24 = undefined;
            var25 = undefined;
            var26 = undefined;
            var27 = undefined;
            var28 = undefined;
            var29 = undefined;
            var23 = var30.guild_requirements;
            if(!(var24 === var23)) { _fun0007_ip = 31; continue _fun0007 }
 27:
            var23 = new Array(0);
 31:
            var22 = var30.guild_size;
            if(!(var24 === var22)) { _fun0007_ip = 51; continue _fun0007 }
 41:
            var22 = [null, null];
 51:
            var21 = var30.guild_permissions;
            if(!(var24 === var21)) { _fun0007_ip = 67; continue _fun0007 }
 63:
            var21 = new Array(0);
 67:
            var3 = var23.length;
            var20 = 0;
            var1 = true;
            if(!(var20 !== var3)) { _fun0007_ip = 1146; continue _fun0007 }
 83:
            var3 = _closure1_slot28;
            var6 = var3.bind(var24)(var23);
            var5 = var6.bind(var24)();
            var3 = var5.done;
            if(var3) { _fun0007_ip = 149; continue _fun0007 }
 107:
            var8 = var5.value;
            var7 = _closure1_slot26;
            var3 = var7.has;
            var3 = var3.bind(var7)(var8);
            var1 = false;
            if(!var3) { _fun0007_ip = 1146; continue _fun0007 }
 134:
            var7 = var6.bind(var24)();
            var3 = var7.done;
            var5 = var7;
            if(!var3) { _fun0007_ip = 107; continue _fun0007 }
 149:
            var5 = var23.includes;
            var3 = _closure1_slot25;
            var3 = var3.GUILD_SIZE_ALL;
            var5 = var5.bind(var23)(var3);
            var6 = _closure1_slot28;
            var7 = _closure1_slot10;
            var3 = var7.getGuildsArray;
            var3 = var3.bind(var7)();
            var18 = var6.bind(var24)(var3);
            var3 = var18.bind(var24)();
            var6 = var3.done;
            var17 = null;
            var16 = 12;
            var15 = 1;
            var14 = var3;
            var13 = true;
            var12 = undefined;
            var11 = undefined;
            var10 = undefined;
            var9 = undefined;
            var8 = undefined;
            var7 = undefined;
            var3 = true;
            if(var6) { _fun0007_ip = 1134; continue _fun0007 }
 234:
            var25 = var14.value;
            if(var5) { _fun0007_ip = 268; continue _fun0007 }
 242:
            var31 = var23.includes;
            var6 = _closure1_slot25;
            var6 = var6.GUILD_SIZE;
            var6 = var31.bind(var23)(var6);
            if(!var6) { _fun0007_ip = 411; continue _fun0007 }
 268:
            var32 = _closure1_slot9;
            var31 = var32.getMemberCount;
            var6 = var25;
            var6 = var6.id;
            var38 = var31.bind(var32)(var6);
            var6 = var17 == var38;
            var31 = false;
            var37 = var38;
            var36 = var11;
            var35 = var10;
            var34 = var9;
            var33 = var8;
            var32 = var7;
            if(var6) { _fun0007_ip = 1092; continue _fun0007 }
 321:
            var6 = var22[var20];
            if(!(var17 != var6)) { _fun0007_ip = 363; continue _fun0007 }
 329:
            var6 = var22[var20];
            var6 = var38 < var6;
            var31 = false;
            var37 = var38;
            var36 = var11;
            var35 = var10;
            var34 = var9;
            var33 = var8;
            var32 = var7;
            if(var6) { _fun0007_ip = 1092; continue _fun0007 }
 363:
            var6 = var22[var15];
            var12 = var38;
            if(!(var17 != var6)) { _fun0007_ip = 411; continue _fun0007 }
 374:
            var6 = var22[var15];
            var6 = var38 > var6;
            var12 = var38;
            var31 = false;
            var37 = var12;
            var36 = var11;
            var35 = var10;
            var34 = var9;
            var33 = var8;
            var32 = var7;
            if(var6) { _fun0007_ip = 1092; continue _fun0007 }
 411:
            var38 = var23.includes;
            var6 = _closure1_slot25;
            var6 = var6.IS_COMMUNITY;
            var6 = var38.bind(var23)(var6);
            if(!var6) { _fun0007_ip = 490; continue _fun0007 }
 434:
            var6 = var25;
            var39 = var6.features;
            var38 = var39.has;
            var6 = _closure1_slot14;
            var6 = var6.COMMUNITY;
            var6 = var38.bind(var39)(var6);
            var31 = var13;
            var37 = var12;
            var36 = var11;
            var35 = var10;
            var34 = var9;
            var33 = var8;
            var32 = var7;
            if(!var6) { _fun0007_ip = 1092; continue _fun0007 }
 490:
            var38 = var23.includes;
            var6 = _closure1_slot25;
            var6 = var6.IS_HUB;
            var6 = var38.bind(var23)(var6);
            if(!var6) { _fun0007_ip = 569; continue _fun0007 }
 513:
            var6 = var25;
            var39 = var6.features;
            var38 = var39.has;
            var6 = _closure1_slot14;
            var6 = var6.HUB;
            var6 = var38.bind(var39)(var6);
            var31 = var13;
            var37 = var12;
            var36 = var11;
            var35 = var10;
            var34 = var9;
            var33 = var8;
            var32 = var7;
            if(!var6) { _fun0007_ip = 1092; continue _fun0007 }
 569:
            var38 = var23.includes;
            var6 = _closure1_slot25;
            var6 = var6.GUILD_PERMISSIONS;
            var6 = var38.bind(var23)(var6);
            if(!var6) { _fun0007_ip = 774; continue _fun0007 }
 595:
            var6 = var21.length;
            var31 = var13;
            var37 = var12;
            var36 = var11;
            var35 = var10;
            var34 = var9;
            var33 = var8;
            var32 = var7;
            if(!(var20 !== var6)) { _fun0007_ip = 1092; continue _fun0007 }
 628:
            var27 = false;
            var6 = _closure1_slot28;
            var6 = var6.bind(var24)(var21);
            var28 = var6;
            var6 = var6.bind(var24)();
            var26 = var6;
            var6 = var6.done;
            if(var6) { _fun0007_ip = 744; continue _fun0007 }
 657:
            var6 = var26;
            var29 = var6.value;
 665: // try_start_0
            var38 = _closure1_slot2;
            var6 = _closure1_slot3;
            var6 = var6[var16];
            var39 = var38.bind(var24)(var6);
            var38 = var39.deserialize;
            var6 = var29;
            var40 = var38.bind(var39)(var6);
            var39 = _closure1_slot11;
            var38 = var39.can;
            var6 = var25;
            var6 = var38.bind(var39)(var40, var6);
            if(var6) { _fun0007_ip = 720; continue _fun0007 }
 718: // try_end0
            _fun0007_ip = 726; continue _fun0007;
 720: // try_start_1
            var27 = true;
 722: // try_end1
            _fun0007_ip = 744; continue _fun0007;
 724: // catch_target0 // catch_target1
            CatchBlockStart(arg_register=5);
 726:
            var6 = var28;
            var6 = var6.bind(var24)();
            var26 = var6;
            var6 = var6.done;
            if(!var6) { _fun0007_ip = 657; continue _fun0007 }
 744:
            var6 = var27;
            var31 = var13;
            var37 = var12;
            var36 = var11;
            var35 = var10;
            var34 = var9;
            var33 = var8;
            var32 = var7;
            if(!var6) { _fun0007_ip = 1092; continue _fun0007 }
 774:
            var38 = _closure1_slot13;
            var6 = var38.getCurrentUser;
            var41 = var6.bind(var38)();
            var6 = var17 == var41;
            var38 = undefined;
            if(var6) { _fun0007_ip = 801; continue _fun0007 }
 796:
            var38 = var41.id;
 801:
            var42 = var25;
            var6 = var42.ownerId;
            var40 = var38 === var6;
            var39 = _closure1_slot11;
            var38 = var39.can;
            var6 = _closure1_slot15;
            var6 = var6.ADMINISTRATOR;
            var39 = var38.bind(var39)(var6, var42);
            var38 = var23.includes;
            var6 = _closure1_slot25;
            var6 = var6.IS_OWNER;
            var6 = var38.bind(var23)(var6);
            if(!var6) { _fun0007_ip = 890; continue _fun0007 }
 863:
            var31 = var13;
            var37 = var12;
            var36 = var41;
            var35 = var40;
            var34 = var39;
            var33 = var8;
            var32 = var7;
            if(!var40) { _fun0007_ip = 1092; continue _fun0007 }
 890:
            var38 = var23.includes;
            var6 = _closure1_slot25;
            var6 = var6.IS_ADMIN;
            var6 = var38.bind(var23)(var6);
            if(!var6) { _fun0007_ip = 940; continue _fun0007 }
 913:
            var31 = var13;
            var37 = var12;
            var36 = var41;
            var35 = var40;
            var33 = var8;
            var32 = var7;
            var34 = var39;
            if(!var34) { _fun0007_ip = 1092; continue _fun0007 }
 940:
            var6 = _closure1_slot21;
            if(!(var17 == var6)) { _fun0007_ip = 952; continue _fun0007 }
 948:
            var38 = {};
            _fun0007_ip = 956; continue _fun0007;
 952:
            var38 = _closure1_slot21;
 956:
            _closure1_slot21 = var38;
            var6 = var30.key;
            var6 = var38[var6];
            if(!(var17 == var6)) { _fun0007_ip = 986; continue _fun0007 }
 973:
            var38 = _closure1_slot21;
            var6 = var30.key;
            var38[var6] = var30;
 986:
            var38 = _closure1_slot12;
            var6 = var38.getGuildId;
            var38 = var6.bind(var38)();
            var6 = var17 != var38;
            if(!var6) { _fun0007_ip = 1019; continue _fun0007 }
 1007:
            var42 = var25;
            var42 = var42.id;
            var6 = var38 === var42;
 1019:
            var43 = var23.includes;
            var42 = _closure1_slot25;
            var42 = var42.IS_VIEWING;
            var42 = var43.bind(var23)(var42);
            if(!var42) { _fun0007_ip = 1066; continue _fun0007 }
 1042:
            var31 = var13;
            var37 = var12;
            var36 = var41;
            var35 = var40;
            var34 = var39;
            var33 = var38;
            var32 = var6;
            if(!var32) { _fun0007_ip = 1092; continue _fun0007 }
 1066:
            var31 = var13;
            var37 = var12;
            var36 = var41;
            var35 = var40;
            var34 = var39;
            var33 = var38;
            var32 = var6;
            var1 = true;
            if(!var5) { _fun0007_ip = 1146; continue _fun0007 }
 1092:
            var38 = var18.bind(var24)();
            var6 = var38.done;
            var13 = var31;
            var12 = var37;
            var11 = var36;
            var10 = var35;
            var9 = var34;
            var8 = var33;
            var7 = var32;
            var14 = var38;
            var3 = var13;
            if(!var6) { _fun0007_ip = 234; continue _fun0007 }
 1134:
            var1 = false;
            if(!var5) { _fun0007_ip = 1146; continue _fun0007 }
 1139:
            var1 = false;
            if(!var3) { _fun0007_ip = 1146; continue _fun0007 }
 1144:
            var1 = true;
 1146:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var10 = function setSurvey(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var4 = var1.survey;
            var1 = false;
            _closure1_slot23 = var1;
            var2 = _closure1_slot18;
            var1 = global;
            var5 = var1.Date;
            var1 = var5.now;
            var1 = var1.bind(var5)();
            var2['lastFetched'] = var1;
            var1 = _closure1_slot18;
            var1 = var1.hiddenSurveys;
            var6 = null;
            if(!(var6 == var1)) { _fun0008_ip = 73; continue _fun0008 }
 61:
            var2 = _closure1_slot18;
            var1 = {};
            var2['hiddenSurveys'] = var1;
 73:
            var8 = var6 != var4;
            var9 = var8;
            if(!var8) { _fun0008_ip = 106; continue _fun0008 }
 83:
            var1 = _closure1_slot18;
            var2 = var1.hiddenSurveys;
            var1 = var4.key;
            var1 = var2[var1];
            var9 = var6 == var1;
 106:
            if(!var8) { _fun0008_ip = 120; continue _fun0008 }
 109:
            var2 = _closure1_slot31;
            var1 = undefined;
            var8 = var2.bind(var1)(var4);
 120:
            var7 = _closure1_slot19;
            if(var7) { _fun0008_ip = 131; continue _fun0008 }
 127:
            var7 = _closure1_slot20;
 131:
            var5 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var5.bind(var1)(var2);
            var10 = var2.Storage;
            var5 = var10.get;
            var2 = _closure1_slot16;
            var12 = var5.bind(var10)(var2);
            var5 = var6 == var12;
            if(var5) { _fun0008_ip = 227; continue _fun0008 }
 180:
            var10 = _closure1_slot1;
            var11 = _closure1_slot3;
            var2 = 14;
            var2 = var11[var2];
            var2 = var10.bind(var1)(var2);
            var11 = var2.bind(var1)();
            var10 = var11.diff;
            var2 = 'day';
            var10 = var10.bind(var11)(var12, var2);
            var2 = 7;
            var5 = var10 < var2;
 227:
            var2 = null;
            if(!var9) { _fun0008_ip = 250; continue _fun0008 }
 232:
            var2 = null;
            if(!var8) { _fun0008_ip = 250; continue _fun0008 }
 237:
            var2 = null;
            if(var7) { _fun0008_ip = 250; continue _fun0008 }
 242:
            var2 = null;
            if(var5) { _fun0008_ip = 250; continue _fun0008 }
 247:
            var2 = var4;
 250:
            _closure1_slot22 = var2;
            return var1;
        }
    };
    var _closure1_slot32 = var10;
    var1 = function handleSelectedGuildChange() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var3 = _closure1_slot22;
            var1 = null;
            if(!(var1 != var3)) { _fun0009_ip = 46; continue _fun0009 }
 13:
            var5 = _closure1_slot22;
            var4 = _closure1_slot31;
            var3 = undefined;
            var4 = var4.bind(var3)(var5);
            var3 = !var4;
            var3 = !var3;
            if(var4) { _fun0009_ip = 43; continue _fun0009 }
 37:
            _closure1_slot22 = var1;
            var3 = false;
 43:
            if(var3) { _fun0009_ip = 156; continue _fun0009 }
 46:
            var3 = _closure1_slot21;
            if(!(var1 == var3)) { _fun0009_ip = 58; continue _fun0009 }
 54:
            var3 = {};
            _fun0009_ip = 62; continue _fun0009;
 58:
            var3 = _closure1_slot21;
 62:
            _closure1_slot21 = var3;
            var3 = global;
            var5 = var3.Object;
            var4 = var5.values;
            var3 = _closure1_slot21;
            var4 = var4.bind(var5)(var3);
            var3 = 0;
            var6 = var4[var3];
            if(!(var1 != var6)) { _fun0009_ip = 140; continue _fun0009 }
 98:
            var3 = _closure1_slot31;
            var5 = undefined;
            var3 = var3.bind(var5)(var6);
            if(!var3) { _fun0009_ip = 140; continue _fun0009 }
 112:
            var4 = _closure1_slot32;
            var3 = {};
            var7 = 'SURVEY_FETCHED';
            var3['type'] = var7;
            var3['survey'] = var6;
            var3 = var4.bind(var5)(var3);
            _fun0009_ip = 152; continue _fun0009;
 140:
            var3 = _closure1_slot22;
            if(!(var1 != var3)) { _fun0009_ip = 152; continue _fun0009 }
 148:
            _closure1_slot22 = var1;
 152:
            var1 = undefined;
            return var1;
 156:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var4 = global;
    var12 = var4.Object;
    var9 = var12.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var12)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 9;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 10;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var9 = var2.GuildFeatures;
    var _closure1_slot14 = var9;
    var9 = var2.Permissions;
    var _closure1_slot15 = var9;
    var2 = var2.FIRST_RUN_DATE_KEY;
    var _closure1_slot16 = var2;
    var2 = {'hiddenSurveys': null, 'surveyOverride': null, 'lastFetched': null, 'lastSeen': null};
    var9 = {};
    var2['hiddenSurveys'] = var9;
    var9 = null;
    var _closure1_slot17 = var2;
    var _closure1_slot18 = var2;
    var2 = false;
    var _closure1_slot19 = var2;
    var _closure1_slot20 = var2;
    var12 = {};
    var _closure1_slot21 = var12;
    var _closure1_slot22 = var9;
    var _closure1_slot23 = var2;
    var2 = 86400000;
    var _closure1_slot24 = var2;
    var13 = {};
    var9 = 'is_owner';
    var13['IS_OWNER'] = var9;
    var9 = 'is_admin';
    var13['IS_ADMIN'] = var9;
    var9 = 'is_community';
    var13['IS_COMMUNITY'] = var9;
    var9 = 'guild_size';
    var13['GUILD_SIZE'] = var9;
    var9 = 'is_hub';
    var13['IS_HUB'] = var9;
    var9 = 'is_viewing';
    var13['IS_VIEWING'] = var9;
    var9 = 'guild_permissions';
    var13['GUILD_PERMISSIONS'] = var9;
    var9 = 'guild_size_all';
    var13['GUILD_SIZE_ALL'] = var9;
    var _closure1_slot25 = var13;
    var12 = var4.Set;
    var9 = var4.Object;
    var4 = var9.values;
    var16 = var4.bind(var9)(var13);
    var9 = var12.prototype;
    var9 = Object.create(var9, {constructor: {value: var12}});
    var17 = var9;
    var4 = new var17[var12](var16, var15);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot26 = var4;
    var4 = 15;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.PersistedStore;
    var4 = function(arg1) {
        var4 = function SurveyStore() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot27;
                var1 = var1.bind(var3)();
                if(var1) { _fun0010_ip = 69; continue _fun0010 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0010_ip = 105; continue _fun0010;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var2 = arg1;
                var4 = this;
                var1 = null;
                if(!(var1 == var2)) { _fun0011_ip = 19; continue _fun0011 }
 12:
                var2 = _closure1_slot17;
 19:
                _closure1_slot18 = var2;
                var3 = var4.syncWith;
                var5 = _closure1_slot12;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = _closure1_slot33;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getCurrentSurvey';
        var5['key'] = var7;
        var7 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var3 = _closure1_slot30;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var1 = null;
                if(var3) { _fun0012_ip = 22; continue _fun0012 }
 18:
                var1 = _closure1_slot22;
 22:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getSurveyOverride';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot18;
            var1 = var1.surveyOverride;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getLastSeenTimestamp';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot18;
            var1 = var1.lastSeen;
            return var1;
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'SurveyStore';
    var9['displayName'] = var4;
    var9['persistKey'] = var4;
    var4 = new Array(3);
    var12 = function(arg1) {
        var1 = {};
        var3 = arg1;
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        var2 = delete var1.validSurveys;
        var2 = delete var1.currentSurvey;
        var2 = delete var1.iosIsPushNotificationClicked;
        var2 = delete var1.iosIsInviteShown;
        var2 = delete var1.iosFirstRunDate;
        return var1;
    };
    var4[0] = var12;
    var12 = function(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var2 = arg1;
            var1 = {};
            var6 = var1;
            var5 = var2;
            var3 = copyDataProperties(var6, var5);
            var2 = var2.lastSeen;
            var3 = null;
            var4 = var3 != var2;
            if(!var4) { _fun0013_ip = 33; continue _fun0013 }
 30:
            var3 = var2;
 33:
            var2 = 'lastSeen';
            var1[var2] = var3;
            return var1;
        }
    };
    var4[1] = var12;
    var12 = function(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var2 = arg1;
            var1 = {};
            var5 = var1;
            var4 = var2;
            var3 = copyDataProperties(var5, var4);
            var3 = var2.hiddenSurveys;
            var2 = null;
            if(!(var2 == var3)) { _fun0014_ip = 29; continue _fun0014 }
 27:
            var3 = {};
 29:
            var2 = 'hiddenSurveys';
            var1[var2] = var3;
            return var1;
        }
    };
    var4[2] = var12;
    var9['migrations'] = var4;
    var4 = 16;
    var4 = var7[var4];
    var16 = var8.bind(var1)(var4);
    var4 = {};
    var4['CONNECTION_OPEN'] = var11;
    var4['CONNECTION_RESUMED'] = var11;
    var4['SURVEY_FETCHED'] = var10;
    var10 = function handleSurveyHide(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var2 = var1.key;
            var1 = _closure1_slot18;
            var4 = var1.hiddenSurveys;
            var1 = true;
            var4[var2] = var1;
            var4 = null;
            _closure1_slot22 = var4;
            var1 = _closure1_slot21;
            if(!(var4 == var1)) { _fun0015_ip = 45; continue _fun0015 }
 41:
            var1 = {};
            _fun0015_ip = 49; continue _fun0015;
 45:
            var1 = _closure1_slot21;
 49:
            _closure1_slot21 = var1;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
        }
    };
    var4['SURVEY_HIDE'] = var10;
    var10 = function handleSurveyOverride(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var3 = var1.id;
            var1 = _closure1_slot18;
            var1['surveyOverride'] = var3;
            var1 = null;
            if(!(var1 != var3)) { _fun0016_ip = 41; continue _fun0016 }
 27:
            var1 = _closure1_slot18;
            var1 = var1.hiddenSurveys;
            var1 = delete var1[var3];
 41:
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 11;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.surveyFetch;
            var2 = _closure1_slot18;
            var3 = var2.surveyOverride;
            var2 = true;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var4['SURVEY_OVERRIDE'] = var10;
    var10 = function handlePushNotificationClick() {
        var1 = true;
        _closure1_slot19 = var1;
        var1 = undefined;
        return var1;
    };
    var4['PUSH_NOTIFICATION_CLICK'] = var10;
    var10 = function handleInviteShow() {
        var1 = true;
        _closure1_slot20 = var1;
        var1 = undefined;
        return var1;
    };
    var4['DISPLAYED_INVITE_SHOW'] = var10;
    var10 = function handleLogout() {
        var2 = _closure1_slot18;
        var1 = {};
        var2['hiddenSurveys'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['LOGOUT'] = var10;
    var5 = function handleSurveySeen() {
        var2 = _closure1_slot18;
        var1 = global;
        var3 = var1.Date;
        var1 = var3.now;
        var1 = var1.bind(var3)();
        var2['lastSeen'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['SURVEY_SEEN'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var17 = var5;
    var15 = var4;
    var4 = new var17[var9](var16, var15, var14);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 17;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'stores/SurveyStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['SURVEY_REFETCH_INTERVAL'] = var2;
    return var1;
})();
// app/actions/native/GPlayActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var12 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var13;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot22;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot22;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function getPlanIdForProduct(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var2 = arg2;
            if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 10;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var4 = var2.AppStorePremiumProductIdsToPremiumBundledItems;
            var2 = var1;
            var4 = var4[var2];
            var2 = null;
            var5 = var2 == var4;
            if(var5) { _fun0004_ip = 38; continue _fun0004 }
case 28:
            var3 = var4.basePlanId;
case 38:
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var2 = var3;
case 39:
            return var2;
case 36: // try_start_0
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 10;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.getPlanIdForGift;
            var1 = var2.bind(var3)(var1);
case 41: // try_end0
            return var1;
case 42: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function fetchDesktopSubscriptionSkus() {
        var1 = undefined;
        var4 = _closure1_slot25;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function _fetchDesktopSubscriptionSkus() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var42 = arguments[1];
                    var41 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                    var40 = undefined;
                    if(!(var42 === var40)) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                    var2 = _closure1_slot10;
                    var42 = var2.DEFAULT;
case 45:
                    if(!(var41 === var40)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                    var41 = false;
case 47:
                    SaveGenerator(address=48);
case 2:
                    return var40;
case 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                    var4 = new Array(0);
                    var39 = global;
                    var3 = var39.Set;
                    var5 = var3.prototype;
                    var5 = Object.create(var5, {constructor: {value: var3}});
                    var75 = var5;
                    var3 = new var75[var3](var74);
                    var9 = var3 instanceof Object ? var3 : var5;
                    var38 = {};
                    var3 = _closure1_slot21;
                    var8 = var3.bind(var40)(var6);
                    var5 = var8.bind(var40)();
                    var3 = var5.done;
                    var36 = null;
                    var7 = var5;
                    var5 = undefined;
                    if(var3) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                    var11 = var7.value;
                    var3 = _closure1_slot23;
                    var10 = var3.bind(var40)(var11, var41);
                    if(!(var36 != var10)) { _fun0005_ip = 54; continue _fun0005 }
case 55:
                    var3 = _closure1_slot14;
                    var3 = var3[var10];
                    var13 = var36 == var3;
                    var12 = undefined;
                    if(var13) { _fun0005_ip = 56; continue _fun0005 }
case 15:
                    var12 = var3.skuId;
case 56:
                    var12 = var36 != var12;
                    if(!var12) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                    var14 = var3.skuId;
                    var13 = _closure1_slot13;
                    var13 = var13.NONE;
                    var12 = var14 !== var13;
case 57:
                    var5 = var3;
                    if(!var12) { _fun0005_ip = 54; continue _fun0005 }
case 59:
                    var13 = var9.add;
                    var12 = var3.skuId;
                    var12 = var13.bind(var9)(var12);
                    var38[var11] = var10;
                    var5 = var3;
case 54:
                    var10 = var8.bind(var40)();
                    var3 = var10.done;
                    var7 = var10;
                    if(!var3) { _fun0005_ip = 53; continue _fun0005 }
case 52:
                    var35 = {};
                    var5 = _closure1_slot21;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 11;
                    var3 = var8[var3];
                    var8 = var7.bind(var40)(var3);
                    var7 = var8.fetchSubscriptionPlansBySKUs;
                    var3 = new Array(0);
                    var34 = 0;
                    var74 = var3;
                    var73 = var9;
                    var72 = 0;
                    var9 = arraySpread(var74, var73, var72);
                    var3 = var7.bind(var8)(var3);
                    SaveGenerator(address=294);
case 60:
                    return var3;
case 61:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0005_ip = 62; continue _fun0005 }
case 63:
                    var8 = var5.bind(var40)(var3);
                    var7 = var8.bind(var40)();
                    var5 = var7.done;
                    if(var5) { _fun0005_ip = 64; continue _fun0005 }
case 65:
                    var9 = _closure1_slot21;
                    var5 = var7.value;
                    var10 = var9.bind(var40)(var5);
                    var9 = var10.bind(var40)();
                    var5 = var9.done;
                    if(var5) { _fun0005_ip = 66; continue _fun0005 }
case 67:
                    var11 = var9.value;
                    var5 = var11.id;
                    var35[var5] = var11;
                    var11 = var10.bind(var40)();
                    var5 = var11.done;
                    var9 = var11;
                    if(!var5) { _fun0005_ip = 67; continue _fun0005 }
case 66:
                    var9 = var8.bind(var40)();
                    var5 = var9.done;
                    var7 = var9;
                    if(!var5) { _fun0005_ip = 65; continue _fun0005 }
case 64:
                    var5 = _closure1_slot21;
                    var33 = var5.bind(var40)(var6);
                    var6 = var33.bind(var40)();
                    var5 = var6.done;
                    var32 = 'inapp';
                    var31 = 'subs';
                    var30 = '';
                    var29 = false;
                    var28 = 12;
                    var27 = 100;
                    var26 = 2;
                    var25 = ' ';
                    var24 = 'usd';
                    var23 = '[fetchDesktopSubscriptionSkus] No price info found';
                    var22 = '[fetchDesktopSubscriptionSkus] Plan not found';
                    var21 = '[fetchDesktopSubscriptionSkus] No plan ID found';
                    var20 = var6;
                    var19 = undefined;
                    var18 = undefined;
                    var17 = undefined;
                    var16 = undefined;
                    var15 = undefined;
                    var14 = undefined;
                    var13 = undefined;
                    var12 = undefined;
                    var11 = undefined;
                    var10 = undefined;
                    var9 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var6 = undefined;
                    if(var5) { _fun0005_ip = 68; continue _fun0005 }
case 69:
                    var61 = var20.value;
                    var62 = var38[var61];
                    if(!(var36 == var62)) { _fun0005_ip = 70; continue _fun0005 }
case 71:
                    var44 = _closure1_slot17;
                    var43 = var44.warn;
                    var5 = {};
                    var5['productId'] = var61;
                    var5 = var43.bind(var44)(var21, var5);
                    var55 = var19;
                    var54 = var18;
                    var53 = var17;
                    var52 = var16;
                    var51 = var15;
                    var50 = var14;
                    var49 = var13;
                    var48 = var12;
                    var47 = var11;
                    var46 = var9;
                    var45 = var8;
                    var44 = var7;
                    var43 = var6;
                    _fun0005_ip = 72; continue _fun0005;
case 70:
                    var59 = var35[var62];
                    if(!(var36 == var59)) { _fun0005_ip = 73; continue _fun0005 }
case 74:
                    var57 = _closure1_slot17;
                    var56 = var57.warn;
                    var5 = {};
                    var5['productId'] = var61;
                    var5['planId'] = var62;
                    var5 = var56.bind(var57)(var22, var5);
                    var55 = var19;
                    var54 = var18;
                    var53 = var17;
                    var52 = var16;
                    var51 = var15;
                    var50 = var14;
                    var49 = var13;
                    var48 = var12;
                    var47 = var11;
                    var10 = var59;
                    var46 = var9;
                    var45 = var8;
                    var44 = var7;
                    var43 = var6;
                    _fun0005_ip = 72; continue _fun0005;
case 73:
                    var5 = var59.prices;
                    var56 = var36 == var5;
                    var67 = var5;
                    var58 = undefined;
                    if(var56) { _fun0005_ip = 75; continue _fun0005 }
case 76:
                    var56 = var5[var42];
                    var5 = var36 == var56;
                    var67 = var56;
                    var58 = undefined;
                    if(var5) { _fun0005_ip = 75; continue _fun0005 }
case 77:
                    var58 = var56.country_prices;
                    var67 = var56;
case 75:
                    var5 = var36 == var58;
                    var57 = undefined;
                    if(var5) { _fun0005_ip = 78; continue _fun0005 }
case 79:
                    var56 = var58.prices;
                    var5 = var36 == var56;
                    var18 = var56;
                    var57 = undefined;
                    if(var5) { _fun0005_ip = 78; continue _fun0005 }
case 80:
                    var57 = var56[var34];
                    var18 = var56;
case 78:
                    if(!(var36 == var57)) { _fun0005_ip = 81; continue _fun0005 }
case 82:
                    var60 = _closure1_slot17;
                    var56 = var60.warn;
                    var5 = {};
                    var5['productId'] = var61;
                    var5['planId'] = var62;
                    var5['priceSetAssignmentType'] = var42;
                    var5 = var56.bind(var60)(var23, var5);
                    var55 = var67;
                    var54 = var18;
                    var53 = var17;
                    var52 = var16;
                    var51 = var15;
                    var50 = var14;
                    var49 = var13;
                    var48 = var12;
                    var47 = var11;
                    var10 = var59;
                    var46 = var58;
                    var45 = var57;
                    var44 = var7;
                    var43 = var6;
                    _fun0005_ip = 72; continue _fun0005;
case 81:
                    var65 = var57.currency;
                    var5 = var36 == var65;
                    var66 = undefined;
                    if(var5) { _fun0005_ip = 83; continue _fun0005 }
case 84:
                    var5 = var65.toLowerCase;
                    var66 = var5.bind(var65)();
case 83:
                    var5 = var36 != var66;
                    var60 = var24;
                    if(!var5) { _fun0005_ip = 85; continue _fun0005 }
case 86:
                    var60 = var66;
case 85:
                    var56 = var57.amount;
                    var5 = _closure1_slot14;
                    var5 = var5[var62];
                    var69 = var4.push;
                    var68 = {};
                    var68['identifier'] = var61;
                    var68['price'] = var56;
                    var61 = var57.currency;
                    var68['currencySymbol'] = var61;
                    var68['currencyCode'] = var60;
                    var60 = var57.currency;
                    var61 = var36 != var60;
                    var60 = var30;
                    if(!var61) { _fun0005_ip = 87; continue _fun0005 }
case 88:
                    var63 = var57.currency;
                    var62 = var56 / var27;
                    var61 = var62.toFixed;
                    var62 = var61.bind(var62)(var26);
                    var61 = var39.HermesInternal;
                    var61 = var61.concat;
                    var60 = var61.bind(var30)(var63, var25, var62);
case 87:
                    var68['priceString'] = var60;
                    var60 = var36 == var58;
                    var64 = undefined;
                    if(var60) { _fun0005_ip = 89; continue _fun0005 }
case 90:
                    var64 = var58.country_code;
case 89:
                    var60 = var64;
                    if(!(var36 == var64)) { _fun0005_ip = 91; continue _fun0005 }
case 92:
                    var62 = _closure1_slot0;
                    var61 = _closure1_slot2;
                    var61 = var61[var28];
                    var61 = var62.bind(var40)(var61);
                    var61 = var61.CountryCodes;
                    var60 = var61.US;
case 91:
                    var68['countryCode'] = var60;
                    var68['downloadable'] = var29;
                    var60 = var36 == var5;
                    var62 = undefined;
                    if(var60) { _fun0005_ip = 93; continue _fun0005 }
case 94:
                    var62 = var5.name;
case 93:
                    var63 = var62;
                    if(!(var36 == var62)) { _fun0005_ip = 95; continue _fun0005 }
case 96:
                    var63 = var59.name;
case 95:
                    var61 = var36 != var63;
                    var60 = var30;
                    if(!var61) { _fun0005_ip = 97; continue _fun0005 }
case 98:
                    var60 = var63;
case 97:
                    var68['description'] = var60;
                    var61 = var36 == var5;
                    var60 = undefined;
                    if(var61) { _fun0005_ip = 99; continue _fun0005 }
case 100:
                    var60 = var5.name;
case 99:
                    var61 = var60;
                    if(!(var36 == var60)) { _fun0005_ip = 101; continue _fun0005 }
case 102:
                    var61 = var59.name;
case 101:
                    var71 = var36 != var61;
                    var70 = var30;
                    if(!var71) { _fun0005_ip = 103; continue _fun0005 }
case 104:
                    var70 = var61;
case 103:
                    var68['title'] = var70;
                    var70 = var31;
                    if(!var41) { _fun0005_ip = 105; continue _fun0005 }
case 106:
                    var70 = var32;
case 105:
                    var68['type'] = var70;
                    var70 = new Array(0);
                    var68['subscriptionOffers'] = var70;
                    var68 = var69.bind(var4)(var68);
                    var55 = var67;
                    var54 = var18;
                    var53 = var66;
                    var52 = var65;
                    var51 = var64;
                    var50 = var63;
                    var49 = var62;
                    var48 = var61;
                    var47 = var60;
                    var10 = var59;
                    var46 = var58;
                    var45 = var57;
                    var44 = var56;
                    var43 = var5;
case 72:
                    var56 = var33.bind(var40)();
                    var5 = var56.done;
                    var19 = var55;
                    var18 = var54;
                    var17 = var53;
                    var16 = var52;
                    var15 = var51;
                    var14 = var50;
                    var13 = var49;
                    var12 = var48;
                    var11 = var47;
                    var9 = var46;
                    var8 = var45;
                    var7 = var44;
                    var6 = var43;
                    var20 = var56;
                    if(!var5) { _fun0005_ip = 69; continue _fun0005 }
case 68:
                    return var4;
case 62:
                    return var3;
case 50:
                    return var2;
case 43:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot25 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function _loadUserCountry() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 107; continue _fun0006 }
case 108:
                    var2 = _closure1_slot20;
                    var3 = undefined;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=24);
case 109:
                    return var2;
case 110:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0006_ip = 111; continue _fun0006 }
case 3:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 13;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'GPLAY_SET_USER_COUNTRY';
                    var4['type'] = var7;
                    var4['countryCode'] = var2;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 111:
                    return var2;
case 107:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot26 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var14 = function withGPlayBillingErrorHandling(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arguments[1];
            var3 = arg1;
            var _closure2_slot0 = var3;
            var3 = undefined;
            if(!(var2 === var3)) { _fun0007_ip = 29; continue _fun0007 }
case 112:
            var2 = false;
case 29:
            var _closure2_slot1 = var2;
            var2 = _closure1_slot3;
            var1 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0008_ip = 113; continue _fun0008 }
case 114:
                        var11 = 0;
                        var5 = copyRestArgs(var11);
                        var4 = undefined;
                        SaveGenerator(address=22);
case 29:
                        return var4;
case 109:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(var6) { _fun0008_ip = 115; continue _fun0008 }
case 116: // try_start_0
                        var6 = _closure2_slot0;
                        var10 = var5;
                        var5 = new Array(0);
                        var11 = var5;
                        var9 = 0;
                        var7 = arraySpread(var11, var10, var9);
                        var11 = var6;
                        var10 = var5;
                        var9 = undefined;
                        var5 = apply(var11, var10, var9);
                        SaveGenerator(address=70);
case 117:
                        return var5;
case 35:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                        if(var6) { _fun0008_ip = 118; continue _fun0008 }
case 36: // try_end0
                        return var5;
case 118:
                        return var5;
case 119: // catch_target0
                        CatchBlockStart(arg_register=5);
                        var3 = var6;
                        var5 = null;
                        var5 = var5 == var6;
                        var7 = undefined;
                        if(var5) { _fun0008_ip = 120; continue _fun0008 }
case 121:
                        var5 = var3;
                        var7 = var5.code;
case 120:
                        var6 = _closure1_slot11;
                        var8 = var6.SERVICE_DISCONNECTED;
                        var6 = new Array(6);
                        var6[0] = var8;
                        var8 = _closure1_slot11;
                        var8 = var8.SERVICE_TIMEOUT;
                        var6[1] = var8;
                        var8 = _closure1_slot11;
                        var8 = var8.SERVICE_UNAVAILABLE;
                        var6[2] = var8;
                        var8 = _closure1_slot11;
                        var8 = var8.BILLING_UNAVAILABLE;
                        var6[3] = var8;
                        var8 = _closure1_slot11;
                        var8 = var8.FEATURE_NOT_SUPPORTED;
                        var6[4] = var8;
                        var8 = _closure1_slot11;
                        var8 = var8.BILLING_CLIENT_NOT_READY;
                        var6[5] = var8;
                        var6 = var7 in var6;
                        if(var6) { _fun0008_ip = 122; continue _fun0008 }
case 123:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 15;
                        var6 = var8[var6];
                        var8 = var7.bind(var4)(var6);
                        var7 = var8.captureBillingException;
                        var6 = var3;
                        var6 = var7.bind(var8)(var6);
                        _fun0008_ip = 124; continue _fun0008;
case 122:
                        var6 = global;
                        var7 = var6.Math;
                        var6 = var7.random;
                        var7 = var6.bind(var7)();
                        var6 = 0.01;
                        if(!(var7 < var6)) { _fun0008_ip = 125; continue _fun0008 }
case 126:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 15;
                        var5 = var7[var5];
                        var7 = var6.bind(var4)(var5);
                        var6 = var7.captureBillingException;
                        var5 = var3;
                        var5 = var6.bind(var7)(var5);
case 125:
                        var5 = _closure2_slot1;
                        if(var5) { _fun0008_ip = 127; continue _fun0008 }
case 124:
                        var5 = _closure2_slot1;
                        if(var5) { _fun0008_ip = 128; continue _fun0008 }
case 27:
                        return var4;
case 128:
                        var4 = var3;
                        throw var4;
case 127:
                        throw var3;
case 115:
                        return var2;
case 113:
                        return var1;
                    }
                };
                var2 = var1.next;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var2 = {};
    var11 = true;
    var2['value'] = var11;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var2);
    var1 = 0;
    var2 = var13[var1];
    var1 = undefined;
    var15 = var5.bind(var1)(var2);
    var _closure1_slot3 = var15;
    var2 = 1;
    var2 = var13[var2];
    var2 = var12.bind(var1)(var2);
    var2 = var2.NativeModules;
    var6 = 2;
    var6 = var13[var6];
    var6 = var12.bind(var1)(var6);
    var7 = var6.deleteGPlayAnalytics;
    var _closure1_slot4 = var7;
    var6 = var6.useGPlayAnalyticsStore;
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var13[var6];
    var6 = var5.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var13[var6];
    var6 = var5.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var13[var6];
    var6 = var12.bind(var1)(var6);
    var7 = var6.AnalyticEvents;
    var _closure1_slot8 = var7;
    var7 = var6.Endpoints;
    var _closure1_slot9 = var7;
    var6 = var6.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot10 = var6;
    var6 = 6;
    var6 = var13[var6];
    var6 = var12.bind(var1)(var6);
    var7 = var6.GPlayBillingResult;
    var _closure1_slot11 = var7;
    var6 = var6.GPlaySkusType;
    var _closure1_slot12 = var6;
    var6 = 7;
    var6 = var13[var6];
    var6 = var12.bind(var1)(var6);
    var7 = var6.PremiumSubscriptionSKUs;
    var _closure1_slot13 = var7;
    var6 = var6.SubscriptionPlanInfo;
    var _closure1_slot14 = var6;
    var6 = 8;
    var6 = var13[var6];
    var6 = var12.bind(var1)(var6);
    var6 = var6.PaymentGateways;
    var _closure1_slot15 = var6;
    var2 = var2.BillingManager;
    var _closure1_slot16 = var2;
    var2 = 9;
    var2 = var13[var2];
    var6 = var5.bind(var1)(var2);
    var2 = var6.prototype;
    var5 = Object.create(var2, {constructor: {value: var6}});
    var18 = 'GPlayActionCreators';
    var19 = var5;
    var2 = new var19[var6](var18, var17);
    var2 = var2 instanceof Object ? var2 : var5;
    var _closure1_slot17 = var2;
    var2 = function* () {
        var1 = function* anon_0_() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                StartGenerator();
                var2 = arguments[0];
                ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                if(var4) { _fun0009_ip = 129; continue _fun0009 }
case 130:
                var6 = undefined;
                if(!(var2 === var6)) { _fun0009_ip = 49; continue _fun0009 }
case 44:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 10;
                var5 = var8[var5];
                var5 = var7.bind(var6)(var5);
                var2 = var5.SubscriptionProductIds;
case 49:
                var3 = var2;
                SaveGenerator(address=55);
case 131:
                return var6;
case 4:
                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                if(var4) { _fun0009_ip = 132; continue _fun0009 }
case 133:
                var5 = var3;
                var4 = null;
                if(!(var4 != var5)) { _fun0009_ip = 134; continue _fun0009 }
case 36:
                var4 = var3;
                var4 = var4.length;
                var12 = 0;
                if(!(var12 !== var4)) { _fun0009_ip = 134; continue _fun0009 }
case 135:
                var8 = _closure1_slot1;
                var5 = _closure1_slot2;
                var7 = 13;
                var5 = var5[var7];
                var9 = var8.bind(var6)(var5);
                var8 = var9.dispatch;
                var5 = {};
                var10 = 'GPLAY_FETCH_SUBSCRIPTION_SKUS_START';
                var5['type'] = var10;
                var5 = var8.bind(var9)(var5);
case 136: // try_start_0
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 14;
                var5 = var9[var5];
                var8 = var8.bind(var6)(var5);
                var5 = var8.isGooglePlayBillingSupported;
                var5 = var5.bind(var8)();
                if(var5) { _fun0009_ip = 137; continue _fun0009 }
case 58:
                var8 = _closure1_slot24;
                var5 = var3;
                var8 = var8.bind(var6)(var5);
                SaveGenerator(address=187);
case 138:
                return var8;
case 19:
                ResumeGenerator(result_out_reg=7, return_bool_out_reg=4);
                var9 = var5;
                var5 = var8;
                if(!var9) { _fun0009_ip = 139; continue _fun0009 }
case 140: // try_end0
                return var8;
case 137: // try_start_1
                var9 = _closure1_slot16;
                var8 = var9.getSubscriptionSkus;
                var3 = var8.bind(var9)(var3);
                SaveGenerator(address=223);
case 141:
                return var3;
case 142:
                ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                var5 = var3;
                if(var8) { _fun0009_ip = 143; continue _fun0009 }
case 139:
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var10 = var9.bind(var6)(var8);
                var9 = var10.dispatch;
                var8 = {};
                var11 = 'GPLAY_SUBSCRIPTION_SKUS_LOADED';
                var8['type'] = var11;
                var11 = new Array(0);
                var15 = var11;
                var14 = var5;
                var13 = 0;
                var12 = arraySpread(var15, var14, var13);
                var8['skus'] = var11;
                var11 = _closure1_slot12;
                var11 = var11.SUBSCRIPTION;
                var8['skusType'] = var11;
                var8 = var9.bind(var10)(var8);
case 144: // try_end1
                return var5;
case 143:
                return var3;
case 145: // catch_target0 // catch_target1
                CatchBlockStart(arg_register=2);
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var6 = var5.bind(var6)(var4);
                var5 = var6.dispatch;
                var4 = {};
                var7 = 'GPLAY_FETCH_SUBSCRIPTION_SKUS_FAILED';
                var4['type'] = var7;
                var4 = var5.bind(var6)(var4);
                throw var3;
case 134:
                var3 = new Array(0);
                return var3;
case 132:
                return var2;
case 129:
                return var1;
            }
        };
        var2 = var1.next;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2 = var15.bind(var1)(var2);
    var10 = var14.bind(var1)(var2, var11);
    var _closure1_slot18 = var10;
    var2 = function* () {
        var1 = function* anon_0_() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                StartGenerator();
                var2 = arguments[0];
                ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                if(var4) { _fun0010_ip = 146; continue _fun0010 }
case 130:
                var6 = undefined;
                if(!(var2 === var6)) { _fun0010_ip = 49; continue _fun0010 }
case 44:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 10;
                var5 = var8[var5];
                var5 = var7.bind(var6)(var5);
                var2 = var5.IAPProductIds;
case 49:
                var3 = var2;
                SaveGenerator(address=55);
case 131:
                return var6;
case 4:
                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                if(var4) { _fun0010_ip = 147; continue _fun0010 }
case 133:
                var5 = var3;
                var4 = null;
                if(!(var4 != var5)) { _fun0010_ip = 148; continue _fun0010 }
case 36:
                var4 = var3;
                var4 = var4.length;
                var12 = 0;
                if(!(var12 !== var4)) { _fun0010_ip = 148; continue _fun0010 }
case 135:
                var8 = _closure1_slot1;
                var5 = _closure1_slot2;
                var7 = 13;
                var5 = var5[var7];
                var9 = var8.bind(var6)(var5);
                var8 = var9.dispatch;
                var5 = {};
                var10 = 'GPLAY_FETCH_IN_APP_SKUS_START';
                var5['type'] = var10;
                var5 = var8.bind(var9)(var5);
case 136: // try_start_1
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 14;
                var5 = var9[var5];
                var8 = var8.bind(var6)(var5);
                var5 = var8.isGooglePlayBillingSupported;
                var5 = var5.bind(var8)();
                if(var5) { _fun0010_ip = 149; continue _fun0010 }
case 150:
                var9 = var3;
                var10 = undefined;
                var11 = undefined;
                var13 = undefined;
                var5 = new Array(0);
                var8 = _closure1_slot21;
                var8 = var8.bind(var6)(var9);
                var11 = var8;
                var8 = var8.bind(var6)();
                var10 = var8;
                var8 = var8.done;
                var9 = 10;
                if(var8) { _fun0010_ip = 151; continue _fun0010 }
case 152:
                var8 = var10;
                var13 = var8.value;
case 153: // try_start_0
                var14 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var9];
                var14 = var14.bind(var6)(var8);
                var8 = var14.getPlanIdForGift;
                var15 = var13;
                var8 = var8.bind(var14)(var15);
                var14 = var5;
                var8 = var14.push;
                var8 = var8.bind(var14)(var15);
case 154: // try_end0
                _fun0010_ip = 155; continue _fun0010;
case 156: // catch_target0
                CatchBlockStart(arg_register=7);
case 155:
                var8 = var11;
                var8 = var8.bind(var6)();
                var10 = var8;
                var8 = var8.done;
                if(!var8) { _fun0010_ip = 152; continue _fun0010 }
case 151:
                var8 = var5;
                var8 = var8.length;
                if(!(var12 !== var8)) { _fun0010_ip = 157; continue _fun0010 }
case 63:
                var10 = _closure1_slot24;
                var9 = var5;
                var5 = _closure1_slot10;
                var8 = var5.GIFT;
                var5 = true;
                var8 = var10.bind(var6)(var9, var8, var5);
                _fun0010_ip = 158; continue _fun0010;
case 157:
                var5 = global;
                var10 = var5.Promise;
                var9 = var10.resolve;
                var5 = new Array(0);
                var8 = var9.bind(var10)(var5);
case 158:
                SaveGenerator(address=358);
case 134:
                return var8;
case 159:
                ResumeGenerator(result_out_reg=7, return_bool_out_reg=4);
                var9 = var5;
                var5 = var8;
                if(!var9) { _fun0010_ip = 160; continue _fun0010 }
case 161: // try_end1
                return var8;
case 149: // try_start_2
                var9 = _closure1_slot16;
                var8 = var9.getIAPSkus;
                var3 = var8.bind(var9)(var3);
                SaveGenerator(address=394);
case 162:
                return var3;
case 163:
                ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                var5 = var3;
                if(var8) { _fun0010_ip = 164; continue _fun0010 }
case 160:
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var10 = var9.bind(var6)(var8);
                var9 = var10.dispatch;
                var8 = {};
                var11 = 'GPLAY_IN_APP_SKUS_LOADED';
                var8['type'] = var11;
                var11 = new Array(0);
                var18 = var11;
                var17 = var5;
                var16 = 0;
                var12 = arraySpread(var18, var17, var16);
                var8['skus'] = var11;
                var11 = _closure1_slot12;
                var11 = var11.IN_APP;
                var8['skusType'] = var11;
                var8 = var9.bind(var10)(var8);
case 165: // try_end2
                return var5;
case 164:
                return var3;
case 166: // catch_target1 // catch_target2
                CatchBlockStart(arg_register=2);
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var6 = var5.bind(var6)(var4);
                var5 = var6.dispatch;
                var4 = {};
                var7 = 'GPLAY_FETCH_IN_APP_SKUS_FAILED';
                var4['type'] = var7;
                var4 = var5.bind(var6)(var4);
                throw var3;
case 148:
                var3 = new Array(0);
                return var3;
case 147:
                return var2;
case 146:
                return var1;
            }
        };
        var2 = var1.next;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2 = var15.bind(var1)(var2);
    var9 = var14.bind(var1)(var2, var11);
    var _closure1_slot19 = var9;
    var2 = function* () {
        var1 = function* anon_0_() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                StartGenerator();
                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                if(var2) { _fun0011_ip = 167; continue _fun0011 }
case 108:
                var2 = global;
                var5 = var2.Promise;
                var4 = var5.all;
                var2 = _closure1_slot18;
                var3 = undefined;
                var7 = var2.bind(var3)();
                var2 = new Array(2);
                var2[0] = var7;
                var6 = _closure1_slot19;
                var6 = var6.bind(var3)();
                var2[1] = var6;
                var2 = var4.bind(var5)(var2);
                SaveGenerator(address=63);
case 7:
                return var2;
case 168:
                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                if(var4) { _fun0011_ip = 169; continue _fun0011 }
case 170:
                return var3;
case 169:
                return var2;
case 167:
                return var1;
            }
        };
        return var1;
    };
    var2 = var15.bind(var1)(var2);
    var8 = var14.bind(var1)(var2);
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 171; continue _fun0012 }
case 130:
                    var9 = var6;
                    var4 = arg2;
                    var2 = undefined;
                    var8 = undefined;
                    var7 = _closure1_slot5;
                    var5 = var7.getState;
                    var5 = var5.bind(var7)();
                    var5 = var5.analyticsByProductId;
                    var8 = var5[var6];
case 172: // try_start_0
                    var7 = _closure1_slot16;
                    var6 = var7.purchase;
                    var5 = var9;
                    var4 = var6.bind(var7)(var5, var4);
                    SaveGenerator(address=73);
case 40:
                    return var4;
case 173:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0012_ip = 174; continue _fun0012 }
case 118: // try_end0
                    _fun0012_ip = 175; continue _fun0012;
case 174:
                    return var4;
case 176: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var15 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 15;
                    var4 = var6[var4];
                    var10 = var15.bind(var2)(var4);
                    var5 = var10.captureBillingException;
                    var4 = {};
                    var11 = {};
                    var11['productId'] = var9;
                    var4['tags'] = var11;
                    var4 = var5.bind(var10)(var7, var4);
                    var5 = _closure1_slot1;
                    var4 = 16;
                    var4 = var6[var4];
                    var11 = var5.bind(var2)(var4);
                    var10 = var11.show;
                    var4 = {};
                    var12 = 17;
                    var13 = var6[var12];
                    var13 = var15.bind(var2)(var13);
                    var16 = var13.intl;
                    var14 = var16.string;
                    var13 = var6[var12];
                    var13 = var15.bind(var2)(var13);
                    var13 = var13.t;
                    var13 = var13.U+H+kd;
                    var13 = var14.bind(var16)(var13);
                    var4['title'] = var13;
                    var13 = var6[var12];
                    var13 = var15.bind(var2)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var6[var12];
                    var12 = var15.bind(var2)(var12);
                    var12 = var12.t;
                    var12 = var12.LFFx5G;
                    var12 = var13.bind(var14)(var12);
                    var4['body'] = var12;
                    var4 = var10.bind(var11)(var4);
                    var4 = 18;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot8;
                    var4 = var3.GPLAY_PURCHASE_FAILED;
                    var3 = {};
                    var17 = var8;
                    var18 = var3;
                    var8 = copyDataProperties(var18, var17);
                    var10 = 'purchase';
                    var8 = 'location';
                    var3[var8] = var10;
                    var8 = 'product_id';
                    var3[var8] = var9;
                    var8 = var7.message;
                    var7 = 'error';
                    var3[var7] = var8;
                    var3 = var5.bind(var6)(var4, var3);
case 175:
                    return var2;
case 171:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var7 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2, arg3, arg4, arg5) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4, arg5) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0013_ip = 129; continue _fun0013 }
case 114:
                    var8 = arg1;
                    var3 = arg2;
                    var13 = arg3;
                    var2 = arg4;
                    var7 = arg5;
case 46: // try_start_0
                    var11 = _closure1_slot16;
                    var10 = var11.subscribe;
                    var21 = var8;
                    var20 = var3;
                    var19 = var13;
                    var18 = var2;
                    var17 = var7;
                    var22 = var11;
                    var2 = var22[var10](var21, var20, var19, var18, var17, var16);
                    SaveGenerator(address=64);
case 38:
                    return var2;
case 133:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0013_ip = 167; continue _fun0013 }
case 35: // try_end0
                    _fun0013_ip = 177; continue _fun0013;
case 167:
                    return var2;
case 178: // catch_target0
                    CatchBlockStart(arg_register=9);
                    var6 = var10;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 15;
                    var3 = var5[var3];
                    var5 = undefined;
                    var9 = var4.bind(var5)(var3);
                    var4 = var9.captureBillingException;
                    var3 = {};
                    var11 = {};
                    var12 = var8;
                    var11['productId'] = var12;
                    var14 = var13;
                    var12 = null;
                    var14 = var12 != var14;
                    var12 = '';
                    if(!var14) { _fun0013_ip = 179; continue _fun0013 }
case 180:
                    var12 = var13;
case 179:
                    var11['oldProductId'] = var12;
                    var3['tags'] = var11;
                    var3 = var4.bind(var9)(var10, var3);
                    var4 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 16;
                    var3 = var9[var3];
                    var11 = var4.bind(var5)(var3);
                    var10 = var11.show;
                    var3 = {};
                    var15 = _closure1_slot0;
                    var12 = 17;
                    var13 = var9[var12];
                    var13 = var15.bind(var5)(var13);
                    var16 = var13.intl;
                    var14 = var16.string;
                    var13 = var9[var12];
                    var13 = var15.bind(var5)(var13);
                    var13 = var13.t;
                    var13 = var13.U+H+kd;
                    var13 = var14.bind(var16)(var13);
                    var3['title'] = var13;
                    var13 = var9[var12];
                    var13 = var15.bind(var5)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var9[var12];
                    var12 = var15.bind(var5)(var12);
                    var12 = var12.t;
                    var12 = var12.LFFx5G;
                    var12 = var13.bind(var14)(var12);
                    var3['body'] = var12;
                    var3 = var10.bind(var11)(var3);
                    var3 = 18;
                    var3 = var9[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot8;
                    var3 = var2.GPLAY_PURCHASE_FAILED;
                    var2 = {};
                    var9 = 'subscribe';
                    var2['location'] = var9;
                    var2['product_id'] = var8;
                    var2['offer_id'] = var7;
                    var6 = var6.message;
                    var2['error'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 177:
                    var2 = undefined;
                    return var2;
case 129:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var6 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    StartGenerator();
                    var3 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0014_ip = 181; continue _fun0014 }
case 130:
                    var12 = var3;
                    var14 = arg2;
                    var5 = undefined;
                    var8 = undefined;
                    var18 = undefined;
                    var10 = undefined;
                    var16 = undefined;
                    var15 = undefined;
                    var6 = undefined;
                    var9 = _closure1_slot5;
                    var4 = var9.getState;
                    var4 = var4.bind(var9)();
                    var9 = var4.analyticsByProductId;
                    var4 = var3.productId;
                    var8 = var9[var4];
                    var9 = _closure1_slot6;
                    var4 = var9.getId;
                    var18 = var4.bind(var9)();
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = 10;
                    var4 = var11[var4];
                    var4 = var9.bind(var5)(var4);
                    var9 = var4.SubscriptionProductIds;
                    var4 = var9.includes;
                    var3 = var3.productId;
                    var3 = var4.bind(var9)(var3);
                    var9 = !var3;
                    var10 = var9;
                    var4 = null;
                    var16 = null;
                    var15 = null;
                    var3 = var12;
                    var3 = var3.productId;
                    if(var9) { _fun0014_ip = 182; continue _fun0014 }
case 183:
                    var16 = var3;
                    _fun0014_ip = 184; continue _fun0014;
case 182:
                    var15 = var3;
case 184:
                    var3 = var10;
                    if(!var3) { _fun0014_ip = 185; continue _fun0014 }
case 186:
                    var9 = var14;
                    var3 = var4 != var9;
case 185:
                    if(!var3) { _fun0014_ip = 187; continue _fun0014 }
case 188:
                    var9 = var14;
                    var9 = var9.gift_style;
                    var3 = var4 == var9;
case 187:
                    if(!var3) { _fun0014_ip = 189; continue _fun0014 }
case 190:
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var3 = 18;
                    var3 = var11[var3];
                    var13 = var9.bind(var5)(var3);
                    var11 = var13.track;
                    var3 = _closure1_slot8;
                    var9 = var3.GIFT_INFO_OPTIONS_MISSING;
                    var3 = {};
                    var17 = 'verifyPurchase';
                    var3['source'] = var17;
                    var17 = var12;
                    var17 = var17.productId;
                    var3['sku_id'] = var17;
                    var3 = var11.bind(var13)(var9, var3);
case 189: // try_start_0
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var3 = 19;
                    var3 = var11[var3];
                    var3 = var9.bind(var5)(var3);
                    var11 = var3.HTTP;
                    var9 = var11.post;
                    var3 = {};
                    var13 = _closure1_slot9;
                    var13 = var13.VERIFY_PURCHASE;
                    var3['url'] = var13;
                    var13 = {};
                    var17 = var12;
                    var19 = var17.purchaseToken;
                    var13['purchase_token'] = var19;
                    var13['user_id'] = var18;
                    var17 = var17.packageName;
                    var13['package_name'] = var17;
                    var13['subscription_sku_id'] = var16;
                    var13['one_time_purchase_sku_id'] = var15;
                    var13['gift_info_options'] = var14;
                    var14 = {};
                    var15 = true;
                    var14['consume_on_validate'] = var15;
                    var13['one_time_purchase_options'] = var14;
                    var3['body'] = var13;
                    var13 = false;
                    var3['rejectWithError'] = var13;
                    var3 = var9.bind(var11)(var3);
                    SaveGenerator(address=384);
case 191:
                    return var3;
case 192:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                    if(var9) { _fun0014_ip = 193; continue _fun0014 }
case 64:
                    var6 = var3;
                    var11 = var8;
                    var11 = var4 == var11;
                    var9 = var11;
                    if(var11) { _fun0014_ip = 194; continue _fun0014 }
case 195:
                    var9 = var10;
case 194:
                    if(var9) { _fun0014_ip = 196; continue _fun0014 }
case 197:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var9 = 18;
                    var9 = var11[var9];
                    var13 = var10.bind(var5)(var9);
                    var11 = var13.track;
                    var9 = _closure1_slot8;
                    var10 = var9.PAYMENT_FLOW_COMPLETED;
                    var9 = var8;
                    var9 = var11.bind(var13)(var10, var9);
                    var10 = _closure1_slot4;
                    var9 = var12;
                    var9 = var9.productId;
                    var9 = var10.bind(var5)(var9);
case 196:
                    var6 = var6.body;
case 198: // try_end0
                    return var6;
case 193:
                    return var3;
case 199: // catch_target0
                    CatchBlockStart(arg_register=9);
                    var2 = var10;
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 15;
                    var3 = var9[var3];
                    var9 = var6.bind(var5)(var3);
                    var6 = var9.captureBillingException;
                    var3 = {};
                    var11 = {};
                    var12 = var12.productId;
                    var11['productId'] = var12;
                    var3['tags'] = var11;
                    var3 = var6.bind(var9)(var10, var3);
                    var3 = var8;
                    if(!(var4 != var3)) { _fun0014_ip = 200; continue _fun0014 }
case 201:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 18;
                    var3 = var6[var3];
                    var6 = var4.bind(var5)(var3);
                    var5 = var6.track;
                    var3 = _closure1_slot8;
                    var4 = var3.PAYMENT_FLOW_FAILED;
                    var3 = {};
                    var20 = var8;
                    var21 = var3;
                    var8 = copyDataProperties(var21, var20);
                    var7 = _closure1_slot15;
                    var8 = var7.GOOGLE;
                    var7 = 'payment_gateway';
                    var3[var7] = var8;
                    var3 = var5.bind(var6)(var4, var3);
case 200:
                    throw var2;
case 181:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var5 = var2.bind(var1)();
    var2 = function* () {
        var1 = function* anon_0_() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                StartGenerator();
                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                if(var2) { _fun0015_ip = 24; continue _fun0015 }
case 114:
                var3 = undefined;
                var6 = undefined;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 14;
                var2 = var8[var2];
                var5 = var5.bind(var3)(var2);
                var2 = var5.isGooglePlayBillingSupported;
                var2 = var2.bind(var5)();
                if(var2) { _fun0015_ip = 36; continue _fun0015 }
case 172:
                var8 = _closure1_slot17;
                var5 = var8.info;
                var2 = '[getUserCountry] Quest: Skipping Google Play country lookup';
                var2 = var5.bind(var8)(var2);
                var2 = null;
                return var2;
case 36: // try_start_0
                var5 = _closure1_slot16;
                var2 = var5.getUserCountry;
                var2 = var2.bind(var5)();
                SaveGenerator(address=94);
case 202:
                return var2;
case 203:
                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                if(var5) { _fun0015_ip = 204; continue _fun0015 }
case 205: // try_end0
                return var2;
case 204:
                return var2;
case 120: // catch_target0
                CatchBlockStart(arg_register=4);
                var7 = var5;
                var2 = null;
                var8 = var2 == var5;
                var5 = undefined;
                if(var8) { _fun0015_ip = 206; continue _fun0015 }
case 53:
                var8 = var7;
                var8 = var8.message;
                var6 = var8;
                var8 = var2 == var8;
                var5 = undefined;
                if(var8) { _fun0015_ip = 206; continue _fun0015 }
case 180:
                var9 = var6;
                var8 = var9.includes;
                var6 = 'max attempts exceeded';
                var5 = var8.bind(var9)(var6);
case 206:
                if(var5) { _fun0015_ip = 207; continue _fun0015 }
case 56:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 15;
                var5 = var8[var5];
                var9 = var6.bind(var3)(var5);
                var8 = var9.captureBillingException;
                var6 = var7;
                var5 = {};
                var10 = {};
                var11 = 'getUserCountry';
                var10['source'] = var11;
                var5['tags'] = var10;
                var5 = var8.bind(var9)(var6, var5);
                _fun0015_ip = 208; continue _fun0015;
case 207:
                var6 = _closure1_slot17;
                var5 = var6.warn;
                var4 = {};
                var8 = var7;
                var8 = var2 == var8;
                var3 = undefined;
                if(var8) { _fun0015_ip = 209; continue _fun0015 }
case 210:
                var3 = var7.message;
case 209:
                var4['error'] = var3;
                var3 = '[getUserCountry] Failed to get user country from Google Play Billing';
                var3 = var5.bind(var6)(var3, var4);
case 208:
                return var2;
case 24:
                return var1;
            }
        };
        return var1;
    };
    var2 = var15.bind(var1)(var2);
    var2 = var14.bind(var1)(var2, var11);
    var _closure1_slot20 = var2;
    var11 = 20;
    var11 = var13[var11];
    var13 = var12.bind(var1)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'actions/native/GPlayActionCreators.tsx';
    var11 = var12.bind(var13)(var11);
    var3['loadSubscriptionSkus'] = var10;
    var3['loadInAppSkus'] = var9;
    var3['loadSkus'] = var8;
    var8 = function loadUserCountry() {
        var1 = undefined;
        var4 = _closure1_slot26;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['loadUserCountry'] = var8;
    var3['purchase'] = var7;
    var3['subscribe'] = var6;
    var3['verifyPurchase'] = var5;
    var5 = function sendPaymentCompleteAnalytics(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot5;
            var3 = var4.getState;
            var3 = var3.bind(var4)();
            var4 = var3.analyticsByProductId;
            var3 = var1.productId;
            var7 = var4[var3];
            var3 = null;
            if(!(var3 != var7)) { _fun0016_ip = 205; continue _fun0016 }
case 48:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 18;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.track;
            var4 = _closure1_slot8;
            var4 = var4.PAYMENT_FLOW_COMPLETED;
            var4 = var5.bind(var6)(var4, var7);
            var2 = _closure1_slot4;
            var1 = var1.productId;
            var1 = var2.bind(var3)(var1);
case 205:
            var1 = undefined;
            return var1;
        }
    };
    var3['sendPaymentCompleteAnalytics'] = var5;
    var5 = function updatePendingDowngrade(arg1, arg2, arg3, arg4) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var5 = _closure1_slot7;
            var3 = var5.getProduct;
            var1 = arg1;
            var1 = var3.bind(var5)(var1);
            var3 = new Array(2);
            var3[0] = var1;
            var4 = var5.getProduct;
            var1 = arg2;
            var1 = var4.bind(var5)(var1);
            var3[1] = var1;
            var1 = 0;
            var6 = var3[var1];
            var1 = 1;
            var3 = var3[var1];
            var4 = null;
            if(!(var4 != var3)) { _fun0017_ip = 211; continue _fun0017 }
case 170:
            if(!(var4 != var6)) { _fun0017_ip = 211; continue _fun0017 }
case 36:
            if(!(var4 != var3)) { _fun0017_ip = 188; continue _fun0017 }
case 111:
            if(!(var4 != var6)) { _fun0017_ip = 188; continue _fun0017 }
case 174:
            var1 = var3.billingPeriod;
            if(!(var4 != var1)) { _fun0017_ip = 188; continue _fun0017 }
case 203:
            var1 = var6.billingPeriod;
            if(!(var4 != var1)) { _fun0017_ip = 188; continue _fun0017 }
case 212:
            var5 = var6.price;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 15;
            var4 = var4[var1];
            var1 = undefined;
            var9 = var7.bind(var1)(var4);
            var8 = var9.calculateStandardizedUnits;
            var7 = var3.billingPeriod;
            var4 = var6.billingPeriod;
            var4 = var8.bind(var9)(var7, var4);
            var4 = var5 / var4;
            var3 = var3.price;
            if(!(!(var3 < var4))) { _fun0017_ip = 213; continue _fun0017 }
case 188:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 13;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'GPLAY_UPDATE_PENDING_DOWNGRADE';
            var2['type'] = var5;
            var5 = {};
            var7 = arg3;
            var5['purchaseToken'] = var7;
            var7 = arg4;
            var5['subscriptionId'] = var7;
            var6 = var6.identifier;
            var5['newSubscriptionSkuId'] = var6;
            var2['pendingDowngrade'] = var5;
            var2 = var3.bind(var4)(var2);
case 211:
            var2 = undefined;
            return var2;
case 213:
            return var1;
        }
    };
    var3['updatePendingDowngrade'] = var5;
    var4 = function downgradeSubscription(arg1) {
        var1 = arg1;
        var7 = var1.purchaseToken;
        var6 = var1.subscriptionId;
        var5 = var1.newSubscriptionSkuId;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 19;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var4 = _closure1_slot9;
        var4 = var4.DOWNGRADE_SUBSCRIPTION;
        var1['url'] = var4;
        var4 = {};
        var4['purchase_token'] = var7;
        var4['subscription_id'] = var6;
        var4['subscription_sku_id'] = var5;
        var1['body'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['downgradeSubscription'] = var4;
    var3['getUserCountry'] = var2;
    return var1;
})();
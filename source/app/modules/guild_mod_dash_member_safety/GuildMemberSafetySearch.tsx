// app/modules/guild_mod_dash_member_safety/GuildMemberSafetySearch.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot8;
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
            var7 = _closure1_slot8;
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
    var _closure1_slot7 = var1;
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
    var _closure1_slot8 = var1;
    var4 = function getDefaultSearchState() {
        var1 = {'query': '', 'requireUnusualDmActivity': false, 'requireCommunicationDisabled': false, 'requireUnusualAccountActivity': false, 'requireUsernameQuarantined': false};
        var2 = global;
        var2 = var2.Set;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var4 = var3;
        var2 = new var4[var2](var3);
        var2 = var2 instanceof Object ? var2 : var3;
        var1['selectedRoleIds'] = var2;
        var2 = {'optionId': 0, 'afterDate': null, 'beforeDate': null};
        var1['selectedJoinDateOption'] = var2;
        var2 = {'optionId': 0, 'afterDate': null, 'beforeDate': null};
        var1['selectedAccountAgeOption'] = var2;
        var2 = undefined;
        var1['selectedJoinSourceType'] = var2;
        var1['selectedSourceInviteCode'] = var2;
        var1['selectedSort'] = var2;
        return var1;
    };
    var _closure1_slot9 = var4;
    var1 = function hasStringMatch(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var5 = arg2;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var2 = var3.toLowerCase;
            var4 = var2.bind(var3)();
            var3 = var4.includes;
            var2 = var5.toLowerCase;
            var2 = var2.bind(var5)();
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var1 = !var2;
case 36:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var5 = global;
    var11 = var5.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
    var1 = 0;
    var8 = var7[var1];
    var1 = undefined;
    var8 = var9.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var9 = var5.Object;
    var8 = var9.freeze;
    var5 = var4.bind(var1)();
    var5 = var8.bind(var9)(var5);
    var _closure1_slot6 = var5;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function GuildMemberSafetySearch(arg1) {
            var3 = this;
            var5 = _closure1_slot3;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = arg1;
            var3['guildId'] = var4;
            var2 = _closure1_slot9;
            var2 = var2.bind(var1)();
            var3['_searchState'] = var2;
            var2 = true;
            var3['hasDefaultQuery'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'requiresUsernameMatch';
        var1['key'] = var2;
        var2 = function get() {
            var1 = this;
            var1 = var1._searchState;
            var2 = var1.query;
            var1 = var2.trim;
            var1 = var1.bind(var2)();
            var2 = var1.length;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var1['get'] = var2;
        var2 = new Array(6);
        var2[0] = var1;
        var1 = {};
        var6 = 'reset';
        var1['key'] = var6;
        var6 = function value() {
            var3 = this;
            var2 = _closure1_slot9;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var3['_searchState'] = var2;
            var2 = true;
            var3['hasDefaultQuery'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'updateSearchState';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = this;
            var1 = {};
            var6 = var2._searchState;
            var7 = var1;
            var3 = copyDataProperties(var7, var6);
            var6 = arg1;
            var7 = var1;
            var3 = copyDataProperties(var7, var6);
            var2['_searchState'] = var1;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 4;
            var3 = var5[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = var2._searchState;
            var1 = _closure1_slot6;
            var1 = var4.bind(var5)(var3, var1);
            var2['hasDefaultQuery'] = var1;
            var1 = true;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'resetSearchState';
        var1['key'] = var6;
        var6 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = this;
                var1 = var3.hasDefaultQuery;
                var1 = !var1;
                if(!var1) { _fun0005_ip = 38; continue _fun0005 }
case 37:
                var4 = _closure1_slot9;
                var2 = undefined;
                var2 = var4.bind(var2)();
                var3['_searchState'] = var2;
                var2 = true;
                var3['hasDefaultQuery'] = var2;
                var1 = true;
case 38:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getSearchState';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1._searchState;
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'isMemberIncludedInSearchResults';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var16 = arg1;
                var1 = this;
                var1 = var1._searchState;
                var9 = var1.query;
                var10 = var1.requireUnusualDmActivity;
                var11 = var1.requireCommunicationDisabled;
                var12 = var1.requireUnusualAccountActivity;
                var13 = var1.requireUsernameQuarantined;
                var7 = var1.selectedRoleIds;
                var4 = var1.selectedJoinDateOption;
                var6 = var1.selectedAccountAgeOption;
                var15 = var1.selectedSourceInviteCode;
                var14 = var1.selectedJoinSourceType;
                var1 = var9.length;
                var3 = 0;
                var2 = var1 > var3;
                if(!var2) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                var1 = var9.trim;
                var8 = var1.bind(var9)();
                var5 = '';
                var1 = false;
                if(!(var5 !== var8)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                var8 = _closure1_slot0;
                var17 = _closure1_slot2;
                var5 = 3;
                var5 = var17[var5];
                var19 = undefined;
                var8 = var8.bind(var19)(var5);
                var5 = var8.splitQuery;
                var9 = var5.bind(var8)(var9);
                var8 = _closure1_slot5;
                var5 = 2;
                var17 = var8.bind(var19)(var9, var5);
                var8 = var17[var3];
                var9 = _closure1_slot7;
                var5 = 1;
                var5 = var17[var5];
                var17 = var9.bind(var19)(var5);
                var9 = var17.bind(var19)();
                var5 = var9.done;
                if(var5) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                var22 = var9.value;
                var5 = var16.userId;
                var1 = true;
                if(!(var5 !== var22)) { _fun0006_ip = 41; continue _fun0006 }
case 45:
                var22 = var17.bind(var19)();
                var5 = var22.done;
                var9 = var22;
                if(!var5) { _fun0006_ip = 44; continue _fun0006 }
case 43:
                var5 = _closure1_slot7;
                var17 = var5.bind(var19)(var8);
                var9 = var17.bind(var19)();
                var5 = var9.done;
                if(var5) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                var23 = var9.value;
                var22 = _closure1_slot10;
                var5 = var16.nick;
                var5 = var22.bind(var19)(var5, var23);
                var1 = true;
                if(var5) { _fun0006_ip = 41; continue _fun0006 }
case 48:
                var22 = var17.bind(var19)();
                var5 = var22.done;
                var9 = var22;
                if(!var5) { _fun0006_ip = 47; continue _fun0006 }
case 46:
                var9 = var16.user;
                var5 = null;
                var5 = var5 == var9;
                var1 = false;
                if(var5) { _fun0006_ip = 41; continue _fun0006 }
case 49:
                var5 = var16.user;
                var17 = var5.globalName;
                var23 = var5.username;
                var5 = _closure1_slot7;
                var22 = var5.bind(var19)(var8);
                var9 = var22.bind(var19)();
                var5 = var9.done;
                if(var5) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                var24 = _closure1_slot10;
                var5 = var9.value;
                var5 = var24.bind(var19)(var23, var5);
                var1 = true;
                if(var5) { _fun0006_ip = 41; continue _fun0006 }
case 52:
                var24 = var22.bind(var19)();
                var5 = var24.done;
                var9 = var24;
                if(!var5) { _fun0006_ip = 51; continue _fun0006 }
case 50:
                var5 = _closure1_slot7;
                var9 = var5.bind(var19)(var8);
                var8 = var9.bind(var19)();
                var5 = var8.done;
                var1 = false;
                if(var5) { _fun0006_ip = 41; continue _fun0006 }
case 53:
                var22 = _closure1_slot10;
                var5 = var8.value;
                var5 = var22.bind(var19)(var17, var5);
                var1 = true;
                if(var5) { _fun0006_ip = 41; continue _fun0006 }
case 54:
                var22 = var9.bind(var19)();
                var5 = var22.done;
                var8 = var22;
                var1 = false;
                if(!var5) { _fun0006_ip = 53; continue _fun0006 }
case 41:
                var2 = !var1;
case 39:
                var1 = !var2;
                if(var2) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                var2 = var7.size;
                var3 = var2 > var3;
                if(!var3) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                var5 = function hasSelectedRole(arg1, arg2) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var5 = arg2;
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var3 = var5.size;
                        var1 = 0;
                        var1 = var1 !== var3;
                        if(!var1) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                        var3 = global;
                        var4 = var3.Array;
                        var3 = var4.from;
                        var4 = var3.bind(var4)(var5);
                        var3 = var4.every;
                        var2 = function(arg1) {
                            var1 = _closure4_slot0;
                            var3 = var1.roles;
                            var2 = var3.includes;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1 = var3.bind(var4)(var2);
case 59:
                        return var1;
                    }
                };
                var2 = undefined;
                var2 = var5.bind(var2)(var16, var7);
                var3 = !var2;
case 57:
                var2 = !var3;
                if(var3) { _fun0006_ip = 61; continue _fun0006 }
case 62:
                var3 = var4.afterDate;
                var8 = null;
                var5 = var8 != var3;
                if(!var5) { _fun0006_ip = 63; continue _fun0006 }
case 64:
                var7 = var16.joinedAtTimestamp;
                var3 = var4.afterDate;
                var5 = var7 < var3;
case 63:
                var3 = !var5;
                if(var5) { _fun0006_ip = 65; continue _fun0006 }
case 66:
                var5 = var4.beforeDate;
                var5 = var8 != var5;
                if(!var5) { _fun0006_ip = 67; continue _fun0006 }
case 68:
                var7 = var16.joinedAtTimestamp;
                var4 = var4.beforeDate;
                var5 = var7 > var4;
case 67:
                var4 = !var5;
                if(var5) { _fun0006_ip = 69; continue _fun0006 }
case 70:
                var5 = var6.afterDate;
                var7 = var8 != var5;
                if(!var7) { _fun0006_ip = 71; continue _fun0006 }
case 72:
                var17 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 5;
                var9 = var9[var5];
                var5 = undefined;
                var17 = var17.bind(var5)(var9);
                var9 = var17.extractTimestamp;
                var5 = var16.userId;
                var9 = var9.bind(var17)(var5);
                var5 = var6.afterDate;
                var7 = var9 < var5;
case 71:
                var5 = !var7;
                if(var7) { _fun0006_ip = 73; continue _fun0006 }
case 74:
                var7 = var6.beforeDate;
                var7 = var8 != var7;
                if(!var7) { _fun0006_ip = 75; continue _fun0006 }
case 76:
                var18 = _closure1_slot1;
                var17 = _closure1_slot2;
                var9 = 5;
                var17 = var17[var9];
                var9 = undefined;
                var18 = var18.bind(var9)(var17);
                var17 = var18.extractTimestamp;
                var9 = var16.userId;
                var9 = var17.bind(var18)(var9);
                var6 = var6.beforeDate;
                var7 = var9 > var6;
case 75:
                var6 = !var7;
                if(var7) { _fun0006_ip = 77; continue _fun0006 }
case 78:
                var7 = var8 == var15;
                if(var7) { _fun0006_ip = 79; continue _fun0006 }
case 80:
                var9 = var16.sourceInviteCode;
                var7 = var9 === var15;
case 79:
                if(!var7) { _fun0006_ip = 81; continue _fun0006 }
case 82:
                var8 = var8 == var14;
                if(var8) { _fun0006_ip = 83; continue _fun0006 }
case 84:
                var9 = var16.joinSourceType;
                var8 = var9 === var14;
case 83:
                if(!var8) { _fun0006_ip = 85; continue _fun0006 }
case 86:
                var9 = var10;
                if(var9) { _fun0006_ip = 87; continue _fun0006 }
case 88:
                var9 = var11;
case 87:
                if(var9) { _fun0006_ip = 89; continue _fun0006 }
case 90:
                var9 = var12;
case 89:
                if(var9) { _fun0006_ip = 91; continue _fun0006 }
case 92:
                var9 = var13;
case 91:
                var9 = !var9;
                if(var9) { _fun0006_ip = 93; continue _fun0006 }
case 94:
                var14 = !var10;
                if(var14) { _fun0006_ip = 95; continue _fun0006 }
case 96:
                var10 = var16.hasUnusualDmActivity;
                var14 = !var10;
case 95:
                var10 = !var14;
                if(!var14) { _fun0006_ip = 97; continue _fun0006 }
case 98:
                var14 = !var11;
                if(var14) { _fun0006_ip = 99; continue _fun0006 }
case 100:
                var17 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = 6;
                var15 = var15[var11];
                var11 = undefined;
                var15 = var17.bind(var11)(var15);
                var11 = var15.isMemberCommunicationDisabled;
                var11 = var11.bind(var15)(var16);
                var14 = !var11;
case 99:
                var11 = !var14;
                if(!var14) { _fun0006_ip = 101; continue _fun0006 }
case 102:
                var14 = !var12;
                if(var14) { _fun0006_ip = 103; continue _fun0006 }
case 104:
                var12 = var16.hasUnusualAccountActivity;
                var14 = !var12;
case 103:
                var12 = !var14;
                if(!var14) { _fun0006_ip = 105; continue _fun0006 }
case 106:
                var13 = !var13;
                if(var13) { _fun0006_ip = 107; continue _fun0006 }
case 108:
                var17 = _closure1_slot0;
                var15 = _closure1_slot2;
                var14 = 7;
                var15 = var15[var14];
                var14 = undefined;
                var15 = var17.bind(var14)(var15);
                var14 = var15.hasAutomodQuarantinedProfile;
                var14 = var14.bind(var15)(var16);
                var13 = !var14;
case 107:
                var12 = !var13;
case 105:
                var11 = var12;
case 101:
                var10 = var11;
case 97:
                var9 = var10;
case 93:
                var8 = var9;
case 85:
                var7 = var8;
case 81:
                var6 = var7;
case 77:
                var5 = var6;
case 73:
                var4 = var5;
case 69:
                var3 = var4;
case 65:
                var2 = var3;
case 61:
                var1 = var2;
case 55:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[5] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_mod_dash_member_safety/GuildMemberSafetySearch.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getDefaultSearchState'] = var4;
    var3['GuildMemberSafetySearch'] = var2;
    return var1;
})();
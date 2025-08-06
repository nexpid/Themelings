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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot8;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot8;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
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
                    _fun0002_ip = 67; continue _fun0002;
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
 343:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
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
 0:
            var3 = arg1;
            var5 = arg2;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0004_ip = 51; continue _fun0004 }
 15:
            var2 = var3.toLowerCase;
            var4 = var2.bind(var3)();
            var3 = var4.includes;
            var2 = var5.toLowerCase;
            var2 = var2.bind(var5)();
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var1 = !var2;
 51:
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
 0:
                var3 = this;
                var1 = var3.hasDefaultQuery;
                var1 = !var1;
                if(!var1) { _fun0005_ip = 44; continue _fun0005 }
 15:
                var4 = _closure1_slot9;
                var2 = undefined;
                var2 = var4.bind(var2)();
                var3['_searchState'] = var2;
                var2 = true;
                var3['hasDefaultQuery'] = var2;
                var1 = true;
 44:
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
 0:
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
                if(!var2) { _fun0006_ip = 445; continue _fun0006 }
 88:
                var1 = var9.trim;
                var8 = var1.bind(var9)();
                var5 = '';
                var1 = false;
                if(!(var5 !== var8)) { _fun0006_ip = 442; continue _fun0006 }
 111:
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
                if(var5) { _fun0006_ip = 226; continue _fun0006 }
 192:
                var22 = var9.value;
                var5 = var16.userId;
                var1 = true;
                if(!(var5 !== var22)) { _fun0006_ip = 442; continue _fun0006 }
 211:
                var22 = var17.bind(var19)();
                var5 = var22.done;
                var9 = var22;
                if(!var5) { _fun0006_ip = 192; continue _fun0006 }
 226:
                var5 = _closure1_slot7;
                var17 = var5.bind(var19)(var8);
                var9 = var17.bind(var19)();
                var5 = var9.done;
                if(var5) { _fun0006_ip = 291; continue _fun0006 }
 247:
                var23 = var9.value;
                var22 = _closure1_slot10;
                var5 = var16.nick;
                var5 = var22.bind(var19)(var5, var23);
                var1 = true;
                if(var5) { _fun0006_ip = 442; continue _fun0006 }
 276:
                var22 = var17.bind(var19)();
                var5 = var22.done;
                var9 = var22;
                if(!var5) { _fun0006_ip = 247; continue _fun0006 }
 291:
                var9 = var16.user;
                var5 = null;
                var5 = var5 == var9;
                var1 = false;
                if(var5) { _fun0006_ip = 442; continue _fun0006 }
 310:
                var5 = var16.user;
                var17 = var5.globalName;
                var23 = var5.username;
                var5 = _closure1_slot7;
                var22 = var5.bind(var19)(var8);
                var9 = var22.bind(var19)();
                var5 = var9.done;
                if(var5) { _fun0006_ip = 382; continue _fun0006 }
 347:
                var24 = _closure1_slot10;
                var5 = var9.value;
                var5 = var24.bind(var19)(var23, var5);
                var1 = true;
                if(var5) { _fun0006_ip = 442; continue _fun0006 }
 367:
                var24 = var22.bind(var19)();
                var5 = var24.done;
                var9 = var24;
                if(!var5) { _fun0006_ip = 347; continue _fun0006 }
 382:
                var5 = _closure1_slot7;
                var9 = var5.bind(var19)(var8);
                var8 = var9.bind(var19)();
                var5 = var8.done;
                var1 = false;
                if(var5) { _fun0006_ip = 442; continue _fun0006 }
 405:
                var22 = _closure1_slot10;
                var5 = var8.value;
                var5 = var22.bind(var19)(var17, var5);
                var1 = true;
                if(var5) { _fun0006_ip = 442; continue _fun0006 }
 425:
                var22 = var9.bind(var19)();
                var5 = var22.done;
                var8 = var22;
                var1 = false;
                if(!var5) { _fun0006_ip = 405; continue _fun0006 }
 442:
                var2 = !var1;
 445:
                var1 = !var2;
                if(var2) { _fun0006_ip = 970; continue _fun0006 }
 454:
                var2 = var7.size;
                var3 = var2 > var3;
                if(!var3) { _fun0006_ip = 484; continue _fun0006 }
 466:
                var5 = function hasSelectedRole(arg1, arg2) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var5 = arg2;
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var3 = var5.size;
                        var1 = 0;
                        var1 = var1 !== var3;
                        if(!var1) { _fun0007_ip = 60; continue _fun0007 }
 26:
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
 60:
                        return var1;
                    }
                };
                var2 = undefined;
                var2 = var5.bind(var2)(var16, var7);
                var3 = !var2;
 484:
                var2 = !var3;
                if(var3) { _fun0006_ip = 967; continue _fun0006 }
 493:
                var3 = var4.afterDate;
                var8 = null;
                var5 = var8 != var3;
                if(!var5) { _fun0006_ip = 524; continue _fun0006 }
 508:
                var7 = var16.joinedAtTimestamp;
                var3 = var4.afterDate;
                var5 = var7 < var3;
 524:
                var3 = !var5;
                if(var5) { _fun0006_ip = 964; continue _fun0006 }
 533:
                var5 = var4.beforeDate;
                var5 = var8 != var5;
                if(!var5) { _fun0006_ip = 562; continue _fun0006 }
 546:
                var7 = var16.joinedAtTimestamp;
                var4 = var4.beforeDate;
                var5 = var7 > var4;
 562:
                var4 = !var5;
                if(var5) { _fun0006_ip = 961; continue _fun0006 }
 571:
                var5 = var6.afterDate;
                var7 = var8 != var5;
                if(!var7) { _fun0006_ip = 635; continue _fun0006 }
 584:
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
 635:
                var5 = !var7;
                if(var7) { _fun0006_ip = 958; continue _fun0006 }
 644:
                var7 = var6.beforeDate;
                var7 = var8 != var7;
                if(!var7) { _fun0006_ip = 708; continue _fun0006 }
 657:
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
 708:
                var6 = !var7;
                if(var7) { _fun0006_ip = 955; continue _fun0006 }
 717:
                var7 = var8 == var15;
                if(var7) { _fun0006_ip = 734; continue _fun0006 }
 724:
                var9 = var16.sourceInviteCode;
                var7 = var9 === var15;
 734:
                if(!var7) { _fun0006_ip = 952; continue _fun0006 }
 740:
                var8 = var8 == var14;
                if(var8) { _fun0006_ip = 757; continue _fun0006 }
 747:
                var9 = var16.joinSourceType;
                var8 = var9 === var14;
 757:
                if(!var8) { _fun0006_ip = 949; continue _fun0006 }
 763:
                var9 = var10;
                if(var9) { _fun0006_ip = 772; continue _fun0006 }
 769:
                var9 = var11;
 772:
                if(var9) { _fun0006_ip = 778; continue _fun0006 }
 775:
                var9 = var12;
 778:
                if(var9) { _fun0006_ip = 784; continue _fun0006 }
 781:
                var9 = var13;
 784:
                var9 = !var9;
                if(var9) { _fun0006_ip = 946; continue _fun0006 }
 793:
                var14 = !var10;
                if(var14) { _fun0006_ip = 808; continue _fun0006 }
 799:
                var10 = var16.hasUnusualDmActivity;
                var14 = !var10;
 808:
                var10 = !var14;
                if(!var14) { _fun0006_ip = 943; continue _fun0006 }
 817:
                var14 = !var11;
                if(var14) { _fun0006_ip = 862; continue _fun0006 }
 823:
                var17 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = 6;
                var15 = var15[var11];
                var11 = undefined;
                var15 = var17.bind(var11)(var15);
                var11 = var15.isMemberCommunicationDisabled;
                var11 = var11.bind(var15)(var16);
                var14 = !var11;
 862:
                var11 = !var14;
                if(!var14) { _fun0006_ip = 940; continue _fun0006 }
 868:
                var14 = !var12;
                if(var14) { _fun0006_ip = 883; continue _fun0006 }
 874:
                var12 = var16.hasUnusualAccountActivity;
                var14 = !var12;
 883:
                var12 = !var14;
                if(!var14) { _fun0006_ip = 937; continue _fun0006 }
 889:
                var13 = !var13;
                if(var13) { _fun0006_ip = 934; continue _fun0006 }
 895:
                var17 = _closure1_slot0;
                var15 = _closure1_slot2;
                var14 = 7;
                var15 = var15[var14];
                var14 = undefined;
                var15 = var17.bind(var14)(var15);
                var14 = var15.hasAutomodQuarantinedProfile;
                var14 = var14.bind(var15)(var16);
                var13 = !var14;
 934:
                var12 = !var13;
 937:
                var11 = var12;
 940:
                var10 = var11;
 943:
                var9 = var10;
 946:
                var8 = var9;
 949:
                var7 = var8;
 952:
                var6 = var7;
 955:
                var5 = var6;
 958:
                var4 = var5;
 961:
                var3 = var4;
 964:
                var2 = var3;
 967:
                var1 = var2;
 970:
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
// app/modules/impersonate/ImpersonateActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
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
            var9 = _closure1_slot16;
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
            var7 = _closure1_slot16;
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
    var _closure1_slot15 = var1;
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
    var _closure1_slot16 = var1;
    var5 = function updateImpersonating(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var8 = arg2;
            var4 = _closure1_slot10;
            var2 = var4.getData;
            var9 = var2.bind(var4)(var3);
            var2 = null;
            var2 = var2 != var9;
            if(!var2) { _fun0004_ip = 36; continue _fun0004 }
case 33:
            var5 = var9.type;
            var4 = var8.type;
            var2 = var5 === var4;
case 36:
            if(!var2) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 10;
            var4 = var6[var2];
            var2 = undefined;
            var11 = var5.bind(var2)(var4);
            var10 = var11.track;
            var4 = _closure1_slot13;
            var7 = var4.VIEW_AS_ROLES_SELECTED;
            var4 = {};
            var12 = global;
            var14 = var12.Object;
            var13 = var14.keys;
            var12 = var9.roles;
            var12 = var13.bind(var14)(var12);
            var12 = var12.length;
            var4['num_roles'] = var12;
            var14 = _closure1_slot0;
            var12 = 11;
            var12 = var6[var12];
            var13 = var14.bind(var2)(var12);
            var12 = var13.collectGuildAnalyticsMetadata;
            var15 = var12.bind(var13)(var3);
            var16 = var4;
            var12 = copyDataProperties(var16, var15);
            var13 = var9.type;
            var12 = 12;
            var12 = var6[var12];
            var12 = var14.bind(var2)(var12);
            var12 = var12.ImpersonateType;
            var12 = var12.NEW_MEMBER;
            var13 = var13 === var12;
            var12 = 'is_viewing_as_member';
            var4[var12] = var13;
            var4 = var10.bind(var11)(var7, var4);
            var4 = 13;
            var4 = var6[var4];
            var6 = var5.bind(var2)(var4);
            var5 = var6.dispatch;
            var4 = {};
            var7 = 'IMPERSONATE_UPDATE';
            var4['type'] = var7;
            var4['guildId'] = var3;
            var7 = {};
            var16 = var7;
            var15 = var9;
            var9 = copyDataProperties(var16, var15);
            var16 = var7;
            var15 = var8;
            var8 = copyDataProperties(var16, var15);
            var4['data'] = var7;
            var4 = var5.bind(var6)(var4);
            var1 = _closure1_slot18;
            var1 = var1.bind(var2)(var3);
case 37:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot17 = var5;
    var1 = function puntFromSelectedChannelIfInaccessible(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arg1;
            var2 = _closure1_slot8;
            var1 = var2.getChannelId;
            var5 = var1.bind(var2)(var6);
            var2 = _closure1_slot3;
            var1 = var2.getChannel;
            var7 = var1.bind(var2)(var5);
            var2 = null;
            if(!(var2 != var5)) { _fun0005_ip = 4; continue _fun0005 }
case 39:
            var3 = _closure1_slot14;
            var1 = undefined;
            var1 = var3.bind(var1)(var5);
            if(var1) { _fun0005_ip = 40; continue _fun0005 }
case 4:
            var5 = _closure1_slot7;
            var3 = var5.can;
            var1 = _closure1_slot11;
            var1 = var1.VIEW_CHANNEL;
            var1 = var3.bind(var5)(var1, var7);
            if(var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var3 = _closure1_slot4;
            var1 = var3.getDefaultChannel;
            var1 = var1.bind(var3)(var6);
            if(!(var2 != var1)) { _fun0005_ip = 40; continue _fun0005 }
case 42:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 14;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.transitionTo;
            var5 = _closure1_slot12;
            var4 = var5.CHANNEL;
            var1 = var1.id;
            var1 = var4.bind(var5)(var6, var1);
            var1 = var2.bind(var3)(var1);
case 40:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var4 = function updateImpersonatedChannels(arg1, arg2, arg3) {
        var4 = arg1;
        var8 = arg2;
        var6 = arg3;
        var1 = global;
        var7 = var1.Set;
        var5 = _closure1_slot9;
        var3 = var5.getOptedInChannels;
        var10 = var3.bind(var5)(var4);
        var5 = var7.prototype;
        var5 = Object.create(var5, {constructor: {value: var7}});
        var11 = var5;
        var3 = new var11[var7](var10, var9);
        var5 = var3 instanceof Object ? var3 : var5;
        var _closure2_slot0 = var5;
        var7 = var8.forEach;
        var3 = function(arg1) {
            var3 = _closure2_slot0;
            var2 = var3.add;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = var7.bind(var8)(var3);
        var3 = var6.forEach;
        var2 = function(arg1) {
            var3 = _closure2_slot0;
            var2 = var3.delete;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var6)(var2);
        var3 = _closure1_slot17;
        var2 = {};
        var7 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 12;
        var6 = var6[var1];
        var1 = undefined;
        var6 = var7.bind(var1)(var6);
        var6 = var6.ImpersonateType;
        var6 = var6.NEW_MEMBER;
        var2['type'] = var6;
        var2['optInChannels'] = var5;
        var2 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var _closure1_slot19 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot10 = var6;
    var6 = 8;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.Permissions;
    var _closure1_slot11 = var9;
    var9 = var6.Routes;
    var _closure1_slot12 = var9;
    var6 = var6.AnalyticEvents;
    var _closure1_slot13 = var6;
    var6 = 9;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.isStaticChannelRoute;
    var _closure1_slot14 = var6;
    var6 = 15;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/impersonate/ImpersonateActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function startImpersonating(arg1, arg2) {
        var3 = arg1;
        var7 = arg2;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 10;
        var4 = var6[var1];
        var1 = undefined;
        var10 = var5.bind(var1)(var4);
        var9 = var10.track;
        var4 = _closure1_slot13;
        var8 = var4.VIEW_AS_ROLES_SELECTED;
        var4 = {};
        var11 = global;
        var13 = var11.Object;
        var12 = var13.keys;
        var11 = var7.roles;
        var11 = var12.bind(var13)(var11);
        var11 = var11.length;
        var4['num_roles'] = var11;
        var13 = _closure1_slot0;
        var11 = 11;
        var11 = var6[var11];
        var12 = var13.bind(var1)(var11);
        var11 = var12.collectGuildAnalyticsMetadata;
        var14 = var11.bind(var12)(var3);
        var15 = var4;
        var11 = copyDataProperties(var15, var14);
        var12 = var7.type;
        var11 = 12;
        var11 = var6[var11];
        var11 = var13.bind(var1)(var11);
        var11 = var11.ImpersonateType;
        var11 = var11.NEW_MEMBER;
        var12 = var12 === var11;
        var11 = 'is_viewing_as_member';
        var4[var11] = var12;
        var4 = var9.bind(var10)(var8, var4);
        var4 = 13;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.dispatch;
        var4 = {};
        var8 = 'IMPERSONATE_UPDATE';
        var4['type'] = var8;
        var4['guildId'] = var3;
        var4['data'] = var7;
        var4 = var5.bind(var6)(var4);
        var2 = _closure1_slot18;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var3['startImpersonating'] = var6;
    var3['updateImpersonating'] = var5;
    var5 = function stopImpersonating(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 13;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'IMPERSONATE_STOP';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['stopImpersonating'] = var5;
    var3['updateImpersonatedChannels'] = var4;
    var4 = function updateImpersonatedRoles(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var8 = arg2;
            var2 = function optIntoPrivateChannelsForGrantedRolesForPreview(arg1, arg2) {
                var7 = arg1;
                var _closure3_slot0 = var7;
                var4 = _closure1_slot4;
                var3 = var4.getSelectableChannelIds;
                var9 = var3.bind(var4)(var7);
                var3 = new Array(0);
                var8 = 0;
                var10 = var3;
                var8 = arraySpread(var10, var9, var8);
                var6 = _closure1_slot4;
                var4 = var6.getVocalChannelIds;
                var9 = var4.bind(var6)(var7);
                var10 = var3;
                var4 = arraySpread(var10, var9, var8);
                var _closure3_slot1 = var3;
                var3 = global;
                var5 = var3.Array;
                var4 = var5.from;
                var3 = arg2;
                var3 = var4.bind(var5)(var3);
                var _closure3_slot2 = var3;
                var3 = _closure1_slot4;
                var2 = var3.addConditionalChangeListener;
                var1 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var6 = _closure1_slot5;
                        var5 = var6.getSelfMember;
                        var4 = _closure3_slot0;
                        var5 = var5.bind(var6)(var4);
                        var _closure4_slot0 = var5;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                        var6 = _closure3_slot2;
                        var5 = var6.some;
                        var4 = function(arg1) {
                            var1 = _closure4_slot0;
                            var3 = var1.roles;
                            var2 = var3.includes;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            var1 = !var1;
                            return var1;
                        };
                        var4 = var5.bind(var6)(var4);
                        if(var4) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                        var5 = _closure1_slot4;
                        var4 = var5.getSelectableChannelIds;
                        var9 = _closure3_slot0;
                        var11 = var4.bind(var5)(var9);
                        var6 = new Array(0);
                        var4 = 0;
                        var12 = var6;
                        var10 = 0;
                        var10 = arraySpread(var12, var11, var10);
                        var8 = _closure1_slot4;
                        var5 = var8.getVocalChannelIds;
                        var11 = var5.bind(var8)(var9);
                        var12 = var6;
                        var5 = arraySpread(var12, var11, var10);
                        var5 = var6.filter;
                        var3 = function(arg1) {
                            var3 = _closure3_slot1;
                            var2 = var3.includes;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            var1 = !var1;
                            return var1;
                        };
                        var5 = var5.bind(var6)(var3);
                        var3 = var5.length;
                        if(!(var3 > var4)) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                        var4 = _closure1_slot19;
                        var3 = _closure3_slot0;
                        var2 = undefined;
                        var1 = new Array(0);
                        var1 = var4.bind(var2)(var3, var5, var1);
case 47:
                        var1 = false;
                        return var1;
case 45:
                        var1 = true;
                        return var1;
case 43:
                        var1 = false;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = undefined;
            var2 = var2.bind(var1)(var4, var8);
            var5 = {};
            var3 = _closure1_slot15;
            var7 = _closure1_slot6;
            var2 = var7.getManyRoles;
            var2 = var2.bind(var7)(var4, var8);
            var7 = var3.bind(var1)(var2);
            var3 = var7.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0006_ip = 49; continue _fun0006 }
case 46:
            var8 = var3.value;
            var2 = var8.id;
            var5[var2] = var8;
            var8 = var7.bind(var1)();
            var2 = var8.done;
            var3 = var8;
            if(!var2) { _fun0006_ip = 46; continue _fun0006 }
case 49:
            var3 = _closure1_slot17;
            var2 = {};
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 12;
            var6 = var8[var6];
            var6 = var7.bind(var1)(var6);
            var6 = var6.ImpersonateType;
            var6 = var6.NEW_MEMBER;
            var2['type'] = var6;
            var2['roles'] = var5;
            var2 = var3.bind(var1)(var4, var2);
            return var1;
        }
    };
    var3['updateImpersonatedRoles'] = var4;
    var2 = function updateImpersonatedData(arg1, arg2) {
        var4 = _closure1_slot17;
        var3 = {};
        var5 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 12;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var2 = var2.ImpersonateType;
        var2 = var2.NEW_MEMBER;
        var3['type'] = var2;
        var6 = arg2;
        var7 = var3;
        var2 = copyDataProperties(var7, var6);
        var2 = arg1;
        var2 = var4.bind(var1)(var2, var3);
        return var1;
    };
    var3['updateImpersonatedData'] = var2;
    return var1;
})();
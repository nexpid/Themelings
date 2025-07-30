// app/modules/impersonate/ImpersonateActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var9 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
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
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot16;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot16;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
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
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
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
 342:
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
    var _closure1_slot16 = var1;
    var5 = function updateImpersonating(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var8 = arg2;
            var4 = _closure1_slot10;
            var2 = var4.getData;
            var9 = var2.bind(var4)(var3);
            var2 = null;
            var2 = var2 != var9;
            if(!var2) { _fun0004_ip = 47; continue _fun0004 }
 33:
            var5 = var9.type;
            var4 = var8.type;
            var2 = var5 === var4;
 47:
            if(!var2) { _fun0004_ip = 281; continue _fun0004 }
 53:
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
 281:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot17 = var5;
    var1 = function puntFromSelectedChannelIfInaccessible(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var6 = arg1;
            var2 = _closure1_slot8;
            var1 = var2.getChannelId;
            var5 = var1.bind(var2)(var6);
            var2 = _closure1_slot3;
            var1 = var2.getChannel;
            var7 = var1.bind(var2)(var5);
            var2 = null;
            if(!(var2 != var5)) { _fun0005_ip = 55; continue _fun0005 }
 41:
            var3 = _closure1_slot14;
            var1 = undefined;
            var1 = var3.bind(var1)(var5);
            if(var1) { _fun0005_ip = 157; continue _fun0005 }
 55:
            var5 = _closure1_slot7;
            var3 = var5.can;
            var1 = _closure1_slot11;
            var1 = var1.VIEW_CHANNEL;
            var1 = var3.bind(var5)(var1, var7);
            if(var1) { _fun0005_ip = 157; continue _fun0005 }
 84:
            var3 = _closure1_slot4;
            var1 = var3.getDefaultChannel;
            var1 = var1.bind(var3)(var6);
            if(!(var2 != var1)) { _fun0005_ip = 157; continue _fun0005 }
 103:
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
 157:
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
 0:
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
 0:
                        var6 = _closure1_slot5;
                        var5 = var6.getSelfMember;
                        var4 = _closure3_slot0;
                        var5 = var5.bind(var6)(var4);
                        var _closure4_slot0 = var5;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0007_ip = 172; continue _fun0007 }
 40:
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
                        if(var4) { _fun0007_ip = 168; continue _fun0007 }
 63:
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
                        if(!(var3 > var4)) { _fun0007_ip = 164; continue _fun0007 }
 143:
                        var4 = _closure1_slot19;
                        var3 = _closure3_slot0;
                        var2 = undefined;
                        var1 = new Array(0);
                        var1 = var4.bind(var2)(var3, var5, var1);
 164:
                        var1 = false;
                        return var1;
 168:
                        var1 = true;
                        return var1;
 172:
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
            if(var2) { _fun0006_ip = 92; continue _fun0006 }
 63:
            var8 = var3.value;
            var2 = var8.id;
            var5[var2] = var8;
            var8 = var7.bind(var1)();
            var2 = var8.done;
            var3 = var8;
            if(!var2) { _fun0006_ip = 63; continue _fun0006 }
 92:
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
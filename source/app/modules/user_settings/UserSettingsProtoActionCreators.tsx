// app/modules/user_settings/UserSettingsProtoActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var13 = require;
        var9 = metroImportDefault;
        var3 = exports;
        var14 = dependencyMap;
        var _closure1_slot0 = var13;
        var _closure1_slot1 = var9;
        var _closure1_slot2 = var14;
        var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var _closure2_slot0 = var3;
                var5 = global;
                var2 = var5.Symbol;
                var4 = 'undefined';
                var2 = typeof var2;
                var2 = var4 !== var2;
                if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var4 = var5.Symbol;
                var4 = var4.iterator;
                var2 = var3[var4];
case 2:
                if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = var3["@@iterator"];
case 4:
                if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var6 = var5.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var3);
                var4 = var2;
                if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var8 = undefined;
                var6 = undefined;
                if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var9 = 'string';
                var7 = typeof var3;
                if(!(var9 !== var7)) { _fun0002_ip = 12; continue _fun0002 }
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
                if(!var7) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var7 = var3.constructor;
case 14:
                var10 = var9;
                if(!var7) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var7 = var3.constructor;
                var10 = var7.name;
case 16:
                var7 = 'Map';
                if(!(var7 !== var10)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var7 = 'Set';
                if(!(var7 !== var10)) { _fun0002_ip = 18; continue _fun0002 }
case 20:
                var7 = 'Arguments';
                if(!(var7 !== var10)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var7 = var9.test;
                var9 = var7.bind(var9)(var10);
                var7 = undefined;
                if(!var9) { _fun0002_ip = 23; continue _fun0002 }
case 21:
                var9 = _closure1_slot14;
                var7 = var9.bind(var8)(var3, var8);
case 23:
                _fun0002_ip = 24; continue _fun0002;
case 18:
                var10 = var5.Array;
                var9 = var10.from;
                var7 = var9.bind(var10)(var3);
case 24:
                var6 = var7;
                _fun0002_ip = 10; continue _fun0002;
case 12:
                var7 = _closure1_slot14;
                var6 = var7.bind(var8)(var3, var8);
case 10:
                var4 = var6;
                if(var4) { _fun0002_ip = 8; continue _fun0002 }
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
                if(!var4) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                _closure2_slot0 = var4;
case 26:
                var4 = 0;
                var _closure2_slot1 = var4;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var1 = var1.length;
                        if(!(!(var2 >= var1))) { _fun0003_ip = 28; continue _fun0003 }
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
                        _fun0003_ip = 30; continue _fun0003;
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
        var _closure1_slot13 = var1;
        var1 = function _arrayLikeToArray(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var3 = undefined;
                var1 = var1 == var3;
                if(var1) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                var2 = var4.length;
                var1 = var3 > var2;
case 31:
                var2 = undefined;
                if(!var1) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                var2 = var4.length;
case 33:
                var1 = global;
                var1 = var1.Array;
                var1 = var1.bind(var3)(var2);
                var3 = 0;
                var5 = var3 < var2;
                if(!var5) { _fun0004_ip = 35; continue _fun0004 }
case 4:
                var5 = var4[var3];
                var1[var3] = var5;
                var3 = var3 + 1;
                if(var3 < var2) { _fun0004_ip = 4; continue _fun0004 }
case 35:
                return var1;
            }
        };
        var _closure1_slot14 = var1;
        var6 = function updateUserAllGuildSettings(arg1, arg2) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var5 = _closure1_slot12;
            var4 = var5.updateAsync;
            var3 = 'guilds';
            var2 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = arg2;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        };
        var _closure1_slot15 = var6;
        var5 = function updateUserGuildSettings(arg1, arg2, arg3) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var5 = _closure1_slot12;
            var4 = var5.updateAsync;
            var3 = 'guilds';
            var2 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.mutateUserGuildSettingsInternal;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = arg1;
                var1 = var4.bind(var5)(var1, var3, var2);
                return var1;
            };
            var1 = arg3;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        };
        var _closure1_slot16 = var5;
        var4 = function updateRecurringDismissibleContentState() {
            var1 = undefined;
            var4 = _closure1_slot18;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot17 = var4;
        var1 = function _updateRecurringDismissibleContentState() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot3;
            var3 = function* (arg1, arg2) {
                var1 = function* anon_0_(arg1, arg2) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                        var3 = arg1;
                        var _closure4_slot0 = var3;
                        var3 = arg2;
                        var _closure4_slot1 = var3;
                        var6 = _closure1_slot12;
                        var5 = var6.updateAsync;
                        var3 = _closure1_slot8;
                        var4 = var3.INFREQUENT_USER_ACTION;
                        var3 = 'userContent';
                        var2 = function(arg1) {
                            var5 = arg1;
                            var3 = var5.recurringDismissibleContentStates;
                            var2 = _closure4_slot0;
                            var1 = {};
                            var5 = var5.recurringDismissibleContentStates;
                            var6 = var5[var2];
                            var7 = var1;
                            var5 = copyDataProperties(var7, var6);
                            var6 = _closure4_slot1;
                            var7 = var1;
                            var4 = copyDataProperties(var7, var6);
                            var3[var2] = var1;
                            var1 = undefined;
                            return var1;
                        };
                        var2 = var5.bind(var6)(var3, var2, var4);
                        SaveGenerator(address=66);
case 38:
                        return var2;
case 39:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                        return var2;
case 40:
                        return var2;
case 36:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot18 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot18 = var1;
        var1 = function _updateGuildDismissedContent() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot3;
            var3 = function* (arg1, arg2, arg3) {
                var1 = function* anon_0_(arg1, arg2, arg3) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0006_ip = 42; continue _fun0006 }
case 37:
                        var3 = arg1;
                        var _closure4_slot0 = var3;
                        var3 = arg3;
                        var _closure4_slot1 = var3;
                        var6 = _closure1_slot16;
                        var3 = _closure1_slot8;
                        var5 = var3.INFREQUENT_USER_ACTION;
                        var4 = undefined;
                        var3 = arg2;
                        var2 = function(arg1) {
                            var5 = arg1;
                            var3 = var5.guildDismissibleContentStates;
                            var2 = _closure4_slot0;
                            var1 = {};
                            var5 = var5.guildDismissibleContentStates;
                            var6 = var5[var2];
                            var7 = var1;
                            var5 = copyDataProperties(var7, var6);
                            var6 = _closure4_slot1;
                            var7 = var1;
                            var4 = copyDataProperties(var7, var6);
                            var3[var2] = var1;
                            var1 = undefined;
                            return var1;
                        };
                        var2 = var6.bind(var4)(var3, var2, var5);
                        SaveGenerator(address=61);
case 43:
                        return var2;
case 7:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0006_ip = 35; continue _fun0006 }
case 30:
                        return var2;
case 35:
                        return var2;
case 42:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot19 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot19 = var1;
        var7 = global;
        var11 = var7.Object;
        var10 = var11.defineProperty;
        var8 = {};
        var1 = true;
        var8['value'] = var1;
        var1 = '__esModule';
        var1 = var10.bind(var11)(var3, var1, var8);
        var1 = 0;
        var8 = var14[var1];
        var1 = undefined;
        var8 = var9.bind(var1)(var8);
        var _closure1_slot3 = var8;
        var8 = 1;
        var8 = var14[var8];
        var8 = var9.bind(var1)(var8);
        var _closure1_slot4 = var8;
        var8 = 2;
        var8 = var14[var8];
        var8 = var9.bind(var1)(var8);
        var _closure1_slot5 = var8;
        var8 = 3;
        var8 = var14[var8];
        var8 = var9.bind(var1)(var8);
        var _closure1_slot6 = var8;
        var8 = 4;
        var10 = var14[var8];
        var10 = var13.bind(var1)(var10);
        var12 = var10.UserSettingsTypes;
        var _closure1_slot7 = var12;
        var10 = var10.UserSettingsDelay;
        var _closure1_slot8 = var10;
        var10 = 5;
        var10 = var14[var10];
        var10 = var13.bind(var1)(var10);
        var11 = var10.AbortCodes;
        var _closure1_slot9 = var11;
        var11 = var10.Endpoints;
        var _closure1_slot10 = var11;
        var10 = var10.AnalyticEvents;
        var _closure1_slot11 = var10;
        var8 = var14[var8];
        var8 = var13.bind(var1)(var8);
        var11 = var8.UserSettingsDelay;
        var10 = var7.Date;
        var8 = var10.now;
        var8 = var8.bind(var10)();
        var8 = 6;
        var10 = var14[var8];
        var17 = var9.bind(var1)(var10);
        var16 = var17.subscribe;
        var15 = 'CONNECTION_OPEN';
        var10 = function() {
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var10 = var16.bind(var17)(var15, var10);
        var8 = var14[var8];
        var15 = var9.bind(var1)(var8);
        var10 = var15.subscribe;
        var9 = 'CONNECTION_CLOSED';
        var8 = function() {
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var8 = var10.bind(var15)(var9, var8);
        var8 = var7.document;
        var9 = 'undefined';
        var8 = typeof var8;
        if(!(var9 !== var8)) { _fun0001_ip = 44; continue _fun0001 }
case 45:
        var15 = var7.document;
        var10 = var15.addEventListener;
        var9 = 'mousedown';
        var8 = function() {
            var1 = undefined;
            return var1;
        };
        var8 = var10.bind(var15)(var9, var8);
        var10 = var7.document;
        var9 = var10.addEventListener;
        var8 = 'keydown';
        var7 = function() {
            var1 = undefined;
            return var1;
        };
        var7 = var9.bind(var10)(var8, var7);
case 44:
        var7 = function() {
            var4 = _closure1_slot5;
            var3 = function UserSettingsProtoActionCreators(arg1, arg2) {
                var3 = this;
                var _closure3_slot0 = var3;
                var6 = _closure1_slot4;
                var5 = _closure2_slot2;
                var1 = undefined;
                var5 = var6.bind(var1)(var3, var5);
                var5 = arg1;
                var3['ProtoClass'] = var5;
                var5 = arg2;
                var3['type'] = var5;
                var5 = new Array(0);
                var3['beforeSendCallbacks'] = var5;
                var5 = 0;
                var3['lastSendTime'] = var5;
                var5 = _closure1_slot3;
                var4 = function* () {
                    var1 = function* anon_0_() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                            var7 = undefined;
                            var18 = undefined;
                            var _closure5_slot0 = var7;
                            var19 = undefined;
                            var11 = undefined;
                            var15 = undefined;
                            var8 = undefined;
                            var17 = undefined;
                            var6 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var5 = 7;
                            var5 = var9[var5];
                            var9 = var6.bind(var7)(var5);
                            var6 = true;
                            var5 = 'this cannot run in the overlay';
                            var5 = var9.bind(var7)(var6, var5);
                            var10 = _closure3_slot0;
                            var13 = var10.logger;
                            var12 = var13.log;
                            var9 = 'Persisting proto';
                            var9 = var12.bind(var13)(var9);
                            var9 = var10.getEditInfo;
                            var9 = var9.bind(var10)();
                            var9 = var9.editInfo;
                            var18 = var9;
                            _closure5_slot0 = var9;
                            var9 = var9.protoToSave;
                            var10 = null;
                            if(!(var10 == var9)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                            var9 = _closure3_slot0;
                            var13 = var9.logger;
                            var12 = var13.log;
                            var9 = 'Not persisting proto because the proto was null';
                            var9 = var12.bind(var13)(var9);
                            _fun0007_ip = 50; continue _fun0007;
case 48:
                            var9 = _closure3_slot0;
                            var14 = var9.beforeSendCallbacks;
                            var13 = var14.forEach;
                            var12 = function(arg1) {
                                var1 = arg1;
                                var3 = var1.processProto;
                                var1 = _closure5_slot0;
                                var2 = var1.protoToSave;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var12 = var13.bind(var14)(var12);
                            var13 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var16 = 8;
                            var12 = var12[var16];
                            var14 = var13.bind(var7)(var12);
                            var13 = var14.protoToB64;
                            var12 = var9.ProtoClass;
                            var9 = var18;
                            var9 = var9.protoToSave;
                            var9 = var13.bind(var14)(var12, var9);
                            var19 = var9;
                            if(!(var10 != var9)) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                            var12 = var19;
                            var9 = '';
                            if(!(var9 === var12)) { _fun0007_ip = 53; continue _fun0007 }
case 51:
                            var9 = _closure3_slot0;
                            var13 = var9.logger;
                            var12 = var13.log;
                            var9 = 'Not persisting proto because there is nothing to change';
                            var9 = var12.bind(var13)(var9);
                            _fun0007_ip = 50; continue _fun0007;
case 53: // try_start_0
                            var14 = _closure3_slot0;
                            var9 = var14.saveLastSendTime;
                            var9 = var9.bind(var14)();
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var9 = 9;
                            var9 = var13[var9];
                            var9 = var12.bind(var7)(var9);
                            var13 = var9.HTTP;
                            var12 = var13.patch;
                            var9 = {};
                            var21 = _closure1_slot10;
                            var20 = var21.USER_SETTINGS_PROTO;
                            var14 = var14.type;
                            var14 = var20.bind(var21)(var14);
                            var9['url'] = var14;
                            var14 = {};
                            var14['settings'] = var19;
                            var18 = var18.offlineEditDataVersion;
                            var14['required_data_version'] = var18;
                            var9['body'] = var14;
                            var14 = false;
                            var9['rejectWithError'] = var14;
                            var9 = var12.bind(var13)(var9);
                            SaveGenerator(address=398);
case 54:
                            return var9;
case 55:
                            ResumeGenerator(result_out_reg=8, return_bool_out_reg=11);
                            if(var12) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                            var12 = var9.body;
                            var11 = var12;
                            var12 = var12.out_of_date;
                            if(!var12) { _fun0007_ip = 58; continue _fun0007 }
case 44:
                            var12 = _closure3_slot0;
                            var14 = var12.logger;
                            var13 = var14.log;
                            var12 = 'Proto was out of date, discarding changes';
                            var12 = var13.bind(var14)(var12);
case 58:
                            var12 = _closure3_slot0;
                            var13 = var12.getEditInfo;
                            var13 = var13.bind(var12)();
                            var13 = var13.editInfo;
                            var18 = var13.cleanupFuncs;
                            var14 = var18.forEach;
                            var13 = function(arg1) {
                                var2 = arg1;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                                return var1;
                            };
                            var13 = var14.bind(var18)(var13);
                            var14 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var13 = var13[var16];
                            var14 = var14.bind(var7)(var13);
                            var13 = var14.b64ToProto;
                            var12 = var12.ProtoClass;
                            var11 = var11.settings;
                            var11 = var13.bind(var14)(var12, var11);
                            var15 = var11;
                            if(!(var10 != var11)) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                            var12 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var11 = 6;
                            var11 = var13[var11];
                            var13 = var12.bind(var7)(var11);
                            var12 = var13.dispatch;
                            var11 = {'type': 'USER_SETTINGS_PROTO_UPDATE', 'settings': null, 'resetEditInfo': true, 'wasSaved': true, 'local': false};
                            var14 = {};
                            var14['proto'] = var15;
                            var15 = _closure3_slot0;
                            var15 = var15.type;
                            var14['type'] = var15;
                            var11['settings'] = var14;
                            var11 = var12.bind(var13)(var11);
case 61: // try_end0
                            _fun0007_ip = 50; continue _fun0007;
case 59:
                            return var7;
case 56:
                            return var9;
case 62: // catch_target0
                            CatchBlockStart(arg_register=8);
                            var3 = var9;
                            var11 = var9.status;
                            var9 = 429;
                            if(!(var9 === var11)) { _fun0007_ip = 63; continue _fun0007 }
case 64:
                            var9 = _closure3_slot0;
                            var12 = var9.logger;
                            var11 = var12.log;
                            var9 = 'Rate limited, scheduling retry';
                            var9 = var11.bind(var12)(var9);
                            var9 = global;
                            var12 = var9.parseInt;
                            var11 = var3;
                            var11 = var11.headers;
                            var11 = var11.retry-after;
                            var12 = var12.bind(var7)(var11);
                            var17 = var12;
                            var11 = var9.isNaN;
                            var11 = var11.bind(var7)(var12);
                            if(!var11) { _fun0007_ip = 65; continue _fun0007 }
case 66:
                            var17 = 60;
case 65:
                            var13 = var9.setTimeout;
                            var12 = _closure3_slot0;
                            var11 = var12.persistChanges;
                            var16 = var9.Math;
                            var15 = var16.min;
                            var18 = _closure1_slot1;
                            var19 = _closure1_slot2;
                            var9 = 10;
                            var14 = var19[var9];
                            var14 = var18.bind(var7)(var14);
                            var14 = var14.Millis;
                            var20 = var14.SECOND;
                            var14 = 30;
                            var14 = var14 * var20;
                            var9 = var19[var9];
                            var9 = var18.bind(var7)(var9);
                            var9 = var9.Millis;
                            var9 = var9.SECOND;
                            var9 = var17 * var9;
                            var9 = var15.bind(var16)(var14, var9);
                            var13 = var13.bind(var7)(var11, var9);
                            var11 = var12.dispatchChanges;
                            var9 = {};
                            var9['rateLimited'] = var6;
                            var9['timeout'] = var13;
                            var9 = var11.bind(var12)(var9);
case 50:
                            return var7;
case 63:
                            var9 = var3;
                            var11 = var9.status;
                            var9 = 400;
                            if(!(var9 === var11)) { _fun0007_ip = 67; continue _fun0007 }
case 68:
                            var9 = var3;
                            var9 = var9.body;
                            var8 = var9;
                            var9 = var10 == var9;
                            var7 = undefined;
                            if(var9) { _fun0007_ip = 69; continue _fun0007 }
case 70:
                            var7 = var8.code;
case 69:
                            var2 = _closure1_slot9;
                            var2 = var2.INVALID_USER_SETTINGS_DATA;
                            if(!(var7 !== var2)) { _fun0007_ip = 71; continue _fun0007 }
case 67:
                            var7 = _closure3_slot0;
                            var9 = var7.logger;
                            var8 = var9.log;
                            var2 = 'Unknown user settings error';
                            var2 = var8.bind(var9)(var2);
                            var2 = var7.getEditInfo;
                            var2 = var2.bind(var7)();
                            var2 = var2.editInfo;
                            var8 = var2.errorCallbacks;
                            var7 = var8.forEach;
                            var2 = function(arg1) {
                                var2 = arg1;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                                return var1;
                            };
                            var2 = var7.bind(var8)(var2);
                            var2 = var3;
                            _fun0007_ip = 72; continue _fun0007;
case 71:
                            var5 = _closure3_slot0;
                            var9 = var5.logger;
                            var8 = var9.log;
                            var7 = 'Reloading do to invalid data';
                            var7 = var8.bind(var9)(var7);
                            var7 = var5.getEditInfo;
                            var7 = var7.bind(var5)();
                            var7 = var7.editInfo;
                            var8 = var7.errorCallbacks;
                            var7 = var8.forEach;
                            var4 = function(arg1) {
                                var2 = arg1;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                                return var1;
                            };
                            var4 = var7.bind(var8)(var4);
                            var4 = var5.loadIfNecessary;
                            var4 = var4.bind(var5)(var6);
                            var2 = var3;
case 72:
                            throw var2;
case 46:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var5.bind(var1)(var4);
                var3['persistChanges'] = var4;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 11;
                var2 = var5[var2];
                var5 = var4.bind(var1)(var2);
                var2 = var3.ProtoClass;
                var8 = var2.typeName;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var9 = var4;
                var2 = new var9[var5](var8, var7);
                var2 = var2 instanceof Object ? var2 : var4;
                var3['logger'] = var2;
                return var1;
            };
            var _closure2_slot2 = var3;
            var1 = {};
            var2 = 'getEditInfo';
            var1['key'] = var2;
            var2 = function value() {
                var2 = _closure1_slot6;
                var1 = var2.getFullState;
                var2 = var1.bind(var2)();
                var1 = this;
                var1 = var1.type;
                var1 = var2[var1];
                return var1;
            };
            var1['value'] = var2;
            var2 = new Array(11);
            var2[0] = var1;
            var1 = {};
            var5 = 'getCurrentValue';
            var1['key'] = var5;
            var5 = function value() {
                var2 = this;
                var1 = var2.getEditInfo;
                var1 = var1.bind(var2)();
                var1 = var1.proto;
                return var1;
            };
            var1['value'] = var5;
            var2[1] = var1;
            var5 = {};
            var1 = 'updateAsync';
            var5['key'] = var1;
            var9 = _closure1_slot3;
            var1 = undefined;
            var8 = function* (arg1, arg2, arg3, arg4) {
                var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        StartGenerator();
                        var12 = arg1;
                        var10 = arg3;
                        var7 = this;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0008_ip = 73; continue _fun0008 }
case 74:
                        var2 = var7.loadIfNecessary;
                        var2 = var2.bind(var7)();
                        SaveGenerator(address=33);
case 75:
                        return var2;
case 33:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0008_ip = 76; continue _fun0008 }
case 77:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 12;
                        var8 = var6[var4];
                        var3 = undefined;
                        var13 = var5.bind(var3)(var8);
                        var11 = var13.getProtoFieldClass;
                        var8 = var7.ProtoClass;
                        var16 = var11.bind(var13)(var8, var12);
                        var8 = var7.getCurrentValue;
                        var8 = var8.bind(var7)();
                        var11 = var8[var12];
                        var4 = var6[var4];
                        var8 = var5.bind(var3)(var4);
                        var6 = var8.createModifiedProto;
                        var15 = var7.ProtoClass;
                        var17 = arg2;
                        var19 = var8;
                        var18 = var11;
                        var14 = var12;
                        var6 = var19[var6](var18, var17, var16, var15, var14, var13);
                        var4 = null;
                        if(!(var4 != var6)) { _fun0008_ip = 78; continue _fun0008 }
case 79:
                        var8 = var7.logger;
                        var5 = var8.log;
                        var4 = global;
                        var11 = var4.String;
                        var13 = var11.bind(var3)(var12);
                        var4 = var4.HermesInternal;
                        var12 = var4.concat;
                        var11 = 'Updating ';
                        var4 = ' with delay ';
                        var4 = var12.bind(var11)(var13, var4, var10);
                        var4 = var5.bind(var8)(var4);
                        var5 = var7.markDirty;
                        var4 = {};
                        var4['delaySeconds'] = var10;
                        var8 = _closure1_slot8;
                        var8 = var8.AUTOMATED;
                        var8 = var10 === var8;
                        if(var8) { _fun0008_ip = 18; continue _fun0008 }
case 80:
                        var9 = _closure1_slot8;
                        var9 = var9.DAILY;
                        var8 = var10 === var9;
case 18:
                        var4['jitter'] = var8;
                        var8 = arg4;
                        var4['onError'] = var8;
                        var4 = var5.bind(var7)(var6, var4);
case 78:
                        return var3;
case 76:
                        return var2;
case 73:
                        return var1;
                    }
                };
                return var1;
            };
            var8 = var9.bind(var1)(var8);
            var _closure2_slot1 = var8;
            var8 = function updateAsync() {
                var1 = undefined;
                var4 = _closure2_slot1;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var5['value'] = var8;
            var2[2] = var5;
            var5 = {};
            var8 = 'markDirty';
            var5['key'] = var8;
            var8 = function value(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = arg1;
                    var9 = arg2;
                    var4 = this;
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var3 = var3[var1];
                    var1 = undefined;
                    var7 = var5.bind(var1)(var3);
                    var5 = true;
                    var3 = 'this cannot run in the overlay';
                    var3 = var7.bind(var1)(var5, var3);
                    var3 = var4.getEditInfo;
                    var3 = var3.bind(var4)();
                    var5 = var3.editInfo;
                    var3 = {};
                    var7 = var5.timeout;
                    var3['timeout'] = var7;
                    var7 = var5.loaded;
                    if(var7) { _fun0009_ip = 81; continue _fun0009 }
case 9:
                    var7 = global;
                    var8 = var7.Error;
                    var7 = 'Cannot edit user settings proto because we have not yet loaded the stored version from the DB';
                    var7 = var8.bind(var1)(var7);
                    throw var7;
case 81:
                    var8 = var9.dispatch;
                    var7 = false;
                    if(!(var7 !== var8)) { _fun0009_ip = 82; continue _fun0009 }
case 83:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 6;
                    var7 = var10[var7];
                    var10 = var8.bind(var1)(var7);
                    var8 = var10.dispatch;
                    var7 = {'type': 'USER_SETTINGS_PROTO_UPDATE', 'settings': null, 'partial': true, 'local': true};
                    var11 = {};
                    var12 = var4.type;
                    var11['type'] = var12;
                    var11['proto'] = var2;
                    var7['settings'] = var11;
                    var7 = var8.bind(var10)(var7);
case 82:
                    var10 = var9.delaySeconds;
                    var8 = null;
                    var12 = var8 != var10;
                    var7 = 0;
                    if(!var12) { _fun0009_ip = 84; continue _fun0009 }
case 85:
                    var7 = var10;
case 84:
                    var10 = var3.timeout;
                    var10 = var8 != var10;
                    if(!var10) { _fun0009_ip = 86; continue _fun0009 }
case 87:
                    var12 = var5.timeoutDelay;
                    var10 = var7 < var12;
case 86:
                    if(!var10) { _fun0009_ip = 80; continue _fun0009 }
case 88:
                    var12 = var5.rateLimited;
                    var10 = !var12;
case 80:
                    if(!var10) { _fun0009_ip = 89; continue _fun0009 }
case 90:
                    var10 = global;
                    var12 = var10.clearTimeout;
                    var10 = var3.timeout;
                    var10 = var12.bind(var1)(var10);
                    var3['timeout'] = var1;
case 89:
                    var10 = var3.timeout;
                    if(!(var8 == var10)) { _fun0009_ip = 91; continue _fun0009 }
case 92:
                    var12 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var20 = 10;
                    var10 = var10[var20];
                    var10 = var12.bind(var1)(var10);
                    var10 = var10.Millis;
                    var10 = var10.SECOND;
                    var12 = var7 * var10;
                    var10 = var9.jitter;
                    var13 = var12;
                    if(!var10) { _fun0009_ip = 93; continue _fun0009 }
case 94:
                    var10 = global;
                    var15 = var10.Math;
                    var14 = var15.floor;
                    var17 = var10.Math;
                    var16 = var17.random;
                    var16 = var16.bind(var17)();
                    var18 = var10.Math;
                    var17 = var18.min;
                    var19 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var10 = var10[var20];
                    var10 = var19.bind(var1)(var10);
                    var10 = var10.Millis;
                    var19 = var10.SECOND;
                    var10 = 30;
                    var10 = var10 * var19;
                    var10 = var17.bind(var18)(var12, var10);
                    var10 = var16 * var10;
                    var10 = var14.bind(var15)(var10);
                    var13 = var12 + var10;
case 93:
                    var14 = var4.logger;
                    var12 = var14.log;
                    var10 = 'Scheduling save from markDirty';
                    var10 = var12.bind(var14)(var10);
                    var10 = global;
                    var12 = var10.setTimeout;
                    var10 = var4.persistChanges;
                    var10 = var12.bind(var1)(var10, var13);
                    var3['timeout'] = var10;
                    var3['timeoutDelay'] = var7;
case 91:
                    var7 = var9.cleanup;
                    if(!(var8 != var7)) { _fun0009_ip = 95; continue _fun0009 }
case 96:
                    var22 = var5.cleanupFuncs;
                    var7 = new Array(0);
                    var23 = var7;
                    var21 = 0;
                    var21 = arraySpread(var23, var22, var21);
                    var22 = var9.cleanup;
                    var23 = var7;
                    var10 = arraySpread(var23, var22, var21);
                    var3['cleanupFuncs'] = var7;
case 95:
                    var7 = var9.onError;
                    var7 = var8 == var7;
                    if(var7) { _fun0009_ip = 97; continue _fun0009 }
case 98:
                    var13 = var5.errorCallbacks;
                    var12 = var13.includes;
                    var10 = var9.onError;
                    var7 = var12.bind(var13)(var10);
case 97:
                    if(var7) { _fun0009_ip = 99; continue _fun0009 }
case 100:
                    var22 = var5.errorCallbacks;
                    var7 = new Array(1);
                    var23 = var7;
                    var21 = 0;
                    var10 = arraySpread(var23, var22, var21);
                    var9 = var9.onError;
                    var7[9] = var9;
                    var9 = 1;
                    var9 = var10 + var9;
                    var3['errorCallbacks'] = var7;
case 99:
                    var7 = var5.protoToSave;
                    if(!(var8 != var7)) { _fun0009_ip = 101; continue _fun0009 }
case 102:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 8;
                    var6 = var8[var6];
                    var8 = var7.bind(var1)(var6);
                    var7 = var8.mergeTopLevelFields;
                    var6 = var4.ProtoClass;
                    var5 = var5.protoToSave;
                    var5 = var7.bind(var8)(var6, var5, var2);
                    var3['protoToSave'] = var5;
                    _fun0009_ip = 103; continue _fun0009;
case 101:
                    var3['protoToSave'] = var2;
case 103:
                    var2 = var4.dispatchChanges;
                    var2 = var2.bind(var4)(var3);
                    return var1;
                }
            };
            var5['value'] = var8;
            var2[3] = var5;
            var5 = {};
            var8 = 'dispatchChanges';
            var5['key'] = var8;
            var8 = function value(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'USER_SETTINGS_PROTO_UPDATE_EDIT_INFO';
                var2['type'] = var5;
                var5 = {};
                var6 = arg1;
                var5['changes'] = var6;
                var6 = this;
                var6 = var6.type;
                var5['type'] = var6;
                var2['settings'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5['value'] = var8;
            var2[4] = var5;
            var5 = {};
            var8 = 'saveLastSendTime';
            var5['key'] = var8;
            var8 = function value() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = 13;
                    var3 = var1[var6];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = var3.Storage;
                    var3 = var4.get;
                    var5 = 'UserSettingsProtoLastWriteTimes';
                    var4 = var3.bind(var4)(var5);
                    var3 = null;
                    if(!(var3 == var4)) { _fun0010_ip = 4; continue _fun0010 }
case 104:
                    var4 = {};
case 4:
                    var3 = this;
                    var7 = var3.type;
                    var3 = global;
                    var8 = var3.Date;
                    var3 = var8.now;
                    var3 = var3.bind(var8)();
                    var4[var7] = var3;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var3.bind(var1)(var2);
                    var3 = var2.Storage;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var5, var4);
                    return var1;
                }
            };
            var5['value'] = var8;
            var2[5] = var5;
            var5 = {};
            var8 = 'loadIfUncached';
            var5['key'] = var8;
            var8 = function value(arg1, arg2) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = arg2;
                    var2 = this;
                    var5 = _closure1_slot6;
                    var4 = var5.hasLoaded;
                    var1 = arg1;
                    var1 = var4.bind(var5)(var1);
                    if(!var1) { _fun0011_ip = 105; continue _fun0011 }
case 3:
                    var4 = true;
                    var1 = var4 !== var3;
case 105:
                    if(var1) { _fun0011_ip = 106; continue _fun0011 }
case 107:
                    var1 = var2.loadIfNecessary;
                    var1 = var1.bind(var2)(var3);
case 106:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var8;
            var2[6] = var5;
            var5 = {};
            var8 = 'loadIfNecessary';
            var5['key'] = var8;
            var8 = _closure1_slot3;
            var7 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        StartGenerator();
                        var3 = arg1;
                        var5 = this;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0012_ip = 108; continue _fun0012 }
case 109:
                        var13 = var3;
                        var10 = undefined;
                        var4 = undefined;
                        var7 = undefined;
                        var8 = undefined;
                        var6 = undefined;
                        var2 = var5.getEditInfo;
                        var2 = var2.bind(var5)();
                        var2 = var2.editInfo;
                        if(var3) { _fun0012_ip = 110; continue _fun0012 }
case 111:
                        var3 = var2.loaded;
                        if(var3) { _fun0012_ip = 39; continue _fun0012 }
case 112:
                        var2 = var2.loading;
                        if(!var2) { _fun0012_ip = 110; continue _fun0012 }
case 39:
                        return var10;
case 110:
                        var9 = var5.logger;
                        var3 = var9.log;
                        var2 = 'Loading proto';
                        var2 = var3.bind(var9)(var2);
                        var3 = var5.dispatchChanges;
                        var2 = {};
                        var9 = true;
                        var2['loading'] = var9;
                        var2 = var3.bind(var5)(var2);
case 113: // try_start_0
                        var3 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 9;
                        var2 = var9[var2];
                        var2 = var3.bind(var10)(var2);
                        var9 = var2.HTTP;
                        var3 = var9.get;
                        var2 = {};
                        var15 = _closure1_slot10;
                        var12 = var15.USER_SETTINGS_PROTO;
                        var11 = var5.type;
                        var11 = var12.bind(var15)(var11);
                        var2['url'] = var11;
                        var11 = false;
                        var2['rejectWithError'] = var11;
                        var2 = var3.bind(var9)(var2);
                        SaveGenerator(address=186);
case 114:
                        return var2;
case 115:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0012_ip = 116; continue _fun0012 }
case 20:
                        var3 = var2.body;
                        var16 = var3.settings;
                        var12 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var3 = 8;
                        var9 = var9[var3];
                        var15 = var12.bind(var10)(var9);
                        var12 = var15.b64ToProto;
                        var9 = var5.ProtoClass;
                        var12 = var12.bind(var15)(var9, var16);
                        var4 = var12;
                        var9 = null;
                        if(!(var9 != var12)) { _fun0012_ip = 117; continue _fun0012 }
case 118:
                        var9 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var15 = 14;
                        var15 = var12[var15];
                        var16 = var9.bind(var10)(var15);
                        var15 = var5.type;
                        var16 = var16[var15];
                        var14 = _closure1_slot0;
                        var3 = var12[var3];
                        var14 = var14.bind(var10)(var3);
                        var3 = var14.runMigrations;
                        var15 = var4;
                        var3 = var3.bind(var14)(var15, var16);
                        var7 = var3.proto;
                        var14 = var3.isDirty;
                        var8 = var14;
                        var6 = var3.cleanupFuncs;
                        var3 = 6;
                        var3 = var12[var3];
                        var10 = var9.bind(var10)(var3);
                        var9 = var10.dispatch;
                        var3 = {};
                        var12 = 'USER_SETTINGS_PROTO_UPDATE';
                        var3['type'] = var12;
                        var12 = {};
                        var16 = var5.type;
                        var12['type'] = var16;
                        var12['proto'] = var15;
                        var3['settings'] = var12;
                        var12 = var14;
                        if(var14) { _fun0012_ip = 119; continue _fun0012 }
case 120:
                        var12 = var13;
case 119:
                        var3['resetEditInfo'] = var12;
                        var3['local'] = var11;
                        var3 = var9.bind(var10)(var3);
                        SaveGenerator(address=410);
case 121:
                        return var3;
case 122:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                        if(var9) { _fun0012_ip = 123; continue _fun0012 }
case 124:
                        if(!var8) { _fun0012_ip = 125; continue _fun0012 }
case 126:
                        var8 = var5.markDirtyFromMigration;
                        var6 = var8.bind(var5)(var7, var6);
case 125: // try_end0
                        return var4;
case 123:
                        return var3;
case 117: // try_start_1
                        var4 = var5.dispatchChanges;
                        var3 = {'loading': false, 'loaded': true};
                        var3 = var4.bind(var5)(var3);
case 127: // try_end1
                        var3 = undefined;
                        return var3;
case 116:
                        return var2;
case 128: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=1);
                        var4 = var5.dispatchChanges;
                        var3 = {};
                        var6 = false;
                        var3['loading'] = var6;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 108:
                        return var1;
                    }
                };
                return var1;
            };
            var7 = var8.bind(var1)(var7);
            var _closure2_slot0 = var7;
            var7 = function loadIfNecessary() {
                var1 = undefined;
                var4 = _closure2_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var5['value'] = var7;
            var2[7] = var5;
            var5 = {};
            var7 = 'markDirtyFromMigration';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                var5 = this;
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 7;
                var2 = var7[var3];
                var1 = undefined;
                var9 = var4.bind(var1)(var2);
                var2 = true;
                var8 = 'this cannot run in the overlay';
                var8 = var9.bind(var1)(var2, var8);
                var10 = var5.logger;
                var9 = var10.log;
                var8 = 'Marking dirty due to migrates';
                var8 = var9.bind(var10)(var8);
                var3 = var7[var3];
                var7 = var4.bind(var1)(var3);
                var3 = var5.getEditInfo;
                var3 = var3.bind(var5)();
                var3 = var3.editInfo;
                var4 = var3.offlineEditDataVersion;
                var3 = null;
                var4 = var3 == var4;
                var3 = 'offline changes are not supported with migrations';
                var3 = var7.bind(var1)(var4, var3);
                var4 = var5.markDirty;
                var3 = {};
                var7 = arg2;
                var3['cleanup'] = var7;
                var7 = false;
                var3['dispatch'] = var7;
                var6 = _closure1_slot8;
                var6 = var6.AUTOMATED;
                var3['delaySeconds'] = var6;
                var3['jitter'] = var2;
                var2 = arg1;
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var5['value'] = var7;
            var2[8] = var5;
            var5 = {};
            var7 = 'markDirtyIfHasPendingChange';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var4 = this;
                    var3 = var4.beforeSendCallbacks;
                    var2 = var3.some;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.hasChanges;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    if(!var1) { _fun0013_ip = 40; continue _fun0013 }
case 3:
                    var3 = var4.markDirty;
                    var2 = var4.ProtoClass;
                    var1 = var2.create;
                    var2 = var1.bind(var2)();
                    var1 = {'dispatch': false, 'delaySeconds': 0};
                    var5 = arg1;
                    var1['cleanup'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 40:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var2[9] = var5;
            var5 = {};
            var7 = 'scheduleSaveFromOfflineEdit';
            var5['key'] = var7;
            var6 = function value() {
                var4 = this;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 7;
                var2 = var7[var5];
                var1 = undefined;
                var8 = var6.bind(var1)(var2);
                var3 = true;
                var2 = 'this cannot run in the overlay';
                var2 = var8.bind(var1)(var3, var2);
                var8 = var4.logger;
                var3 = var8.log;
                var2 = 'Scheduling save from offline edit';
                var2 = var3.bind(var8)(var2);
                var2 = var4.getEditInfo;
                var2 = var2.bind(var4)();
                var2 = var2.editInfo;
                var3 = var7[var5];
                var10 = var6.bind(var1)(var3);
                var8 = var2.protoToSave;
                var3 = null;
                var9 = var3 != var8;
                var8 = 'protoToSave cannot be null';
                var8 = var10.bind(var1)(var9, var8);
                var8 = var7[var5];
                var10 = var6.bind(var1)(var8);
                var8 = var2.offlineEditDataVersion;
                var9 = var3 != var8;
                var8 = 'offlineEditDataVersion cannot be null';
                var8 = var10.bind(var1)(var9, var8);
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var2 = var2.timeout;
                var3 = var3 == var2;
                var2 = 'timeout must not be set already';
                var2 = var5.bind(var1)(var3, var2);
                var2 = global;
                var7 = var2.Math;
                var6 = var7.floor;
                var5 = var2.Math;
                var3 = var5.random;
                var3 = var3.bind(var5)();
                var5 = 5000;
                var3 = var5 * var3;
                var3 = var6.bind(var7)(var3);
                var5 = var5 + var3;
                var3 = var2.setTimeout;
                var2 = var4.persistChanges;
                var6 = var3.bind(var1)(var2, var5);
                var3 = var4.dispatchChanges;
                var2 = {};
                var2['timeout'] = var6;
                var2['timeoutDelay'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5['value'] = var6;
            var2[10] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var10 = var7.bind(var1)();
        var7 = 15;
        var7 = var14[var7];
        var7 = var13.bind(var1)(var7);
        var20 = var7.PreloadedUserSettings;
        var19 = var12.PRELOADED_USER_SETTINGS;
        var8 = var10.prototype;
        var8 = Object.create(var8, {constructor: {value: var10}});
        var21 = var8;
        var7 = new var21[var10](var20, var19, var18);
        var9 = var7 instanceof Object ? var7 : var8;
        var _closure1_slot12 = var9;
        var7 = 16;
        var7 = var14[var7];
        var7 = var13.bind(var1)(var7);
        var20 = var7.FrecencyUserSettings;
        var19 = var12.FRECENCY_AND_FAVORITES_SETTINGS;
        var8 = var10.prototype;
        var8 = Object.create(var8, {constructor: {value: var10}});
        var21 = var8;
        var7 = new var21[var10](var20, var19, var18);
        var8 = var7 instanceof Object ? var7 : var8;
        var7 = {};
        var15 = var12.PRELOADED_USER_SETTINGS;
        var7[14] = var9;
        var12 = var12.FRECENCY_AND_FAVORITES_SETTINGS;
        var7[11] = var8;
        var12 = 22;
        var12 = var14[var12];
        var14 = var13.bind(var1)(var12);
        var13 = var14.fileFinishedImporting;
        var12 = 'modules/user_settings/UserSettingsProtoActionCreators.tsx';
        var12 = var13.bind(var14)(var12);
        var3['UserSettingsDelay'] = var11;
        var11 = function markUserSettingsLoadOkayForDevelopment() {
            var1 = undefined;
            return var1;
        };
        var3['markUserSettingsLoadOkayForDevelopment'] = var11;
        var3['UserSettingsProtoActionCreators'] = var10;
        var3['PreloadedUserSettingsActionCreators'] = var9;
        var3['FrecencyUserSettingsActionCreators'] = var8;
        var3['UserSettingsActionCreatorsByType'] = var7;
        var3['updateUserAllGuildSettings'] = var6;
        var3['updateUserGuildSettings'] = var5;
        var5 = function updateUserChannelSettings(arg1, arg2, arg3, arg4) {
            var2 = arg2;
            var _closure2_slot0 = var2;
            var2 = arg3;
            var _closure2_slot1 = var2;
            var5 = _closure1_slot16;
            var4 = undefined;
            var3 = arg1;
            var2 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.mutateUserChannelSettingsInternal;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = arg1;
                var1 = var4.bind(var5)(var1, var3, var2);
                return var1;
            };
            var1 = arg4;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var3['updateUserChannelSettings'] = var5;
        var5 = function addDismissedContent(arg1) {
            var4 = arg1;
            var _closure2_slot0 = var4;
            var3 = function trackDismissibleContentDismissedBeforeConnectionOpen(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var7 = arg1;
                    var3 = _closure1_slot6;
                    var2 = var3.hasLoaded;
                    var1 = _closure1_slot7;
                    var1 = var1.PRELOADED_USER_SETTINGS;
                    var1 = var2.bind(var3)(var1);
                    if(var1) { _fun0014_ip = 129; continue _fun0014 }
case 130:
                    var1 = _closure1_slot6;
                    var1 = var1.settings;
                    var3 = var1.userContent;
                    var2 = null;
                    var4 = var2 == var3;
                    var1 = undefined;
                    var5 = undefined;
                    if(var4) { _fun0014_ip = 41; continue _fun0014 }
case 39:
                    var5 = var3.dismissedContents;
case 41:
                    var2 = var2 != var5;
                    if(!var2) { _fun0014_ip = 131; continue _fun0014 }
case 132:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 17;
                    var3 = var8[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.hasBit;
                    var2 = var3.bind(var4)(var5, var7);
case 131:
                    if(var2) { _fun0014_ip = 133; continue _fun0014 }
case 134:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 18;
                    var2 = var9[var2];
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot11;
                    var3 = var2.DISMISSIBLE_CONTENT_DISMISSED_BEFORE_CONNECTION_OPEN;
                    var2 = {};
                    var8 = _closure1_slot0;
                    var6 = 19;
                    var6 = var9[var6];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.DismissibleContent;
                    var6 = var6[var7];
                    var2['content_type'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
case 133:
                    return var1;
case 129:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = undefined;
            var2 = var3.bind(var2)(var4);
            var5 = _closure1_slot12;
            var4 = var5.updateAsync;
            var2 = _closure1_slot8;
            var3 = var2.INFREQUENT_USER_ACTION;
            var2 = 'userContent';
            var1 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = arg1;
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = 17;
                    var2 = var1[var6];
                    var1 = undefined;
                    var9 = var5.bind(var1)(var2);
                    var8 = var9.hasBit;
                    var7 = var3.dismissedContents;
                    var5 = _closure2_slot0;
                    var5 = var8.bind(var9)(var7, var5);
                    if(var5) { _fun0015_ip = 135; continue _fun0015 }
case 28:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.addBit;
                    var4 = var3.dismissedContents;
                    var2 = _closure2_slot0;
                    var2 = var5.bind(var6)(var4, var2);
                    var3['dismissedContents'] = var2;
                    return var1;
case 135:
                    var1 = false;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var2, var1, var3);
            return var1;
        };
        var3['addDismissedContent'] = var5;
        var3['updateRecurringDismissibleContentState'] = var4;
        var4 = function updateGuildDismissedContent() {
            var1 = undefined;
            var4 = _closure1_slot19;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['updateGuildDismissedContent'] = var4;
        var4 = function removeDismissedContent(arg1) {
            var2 = arg1;
            var _closure2_slot0 = var2;
            var5 = _closure1_slot12;
            var4 = var5.updateAsync;
            var2 = _closure1_slot8;
            var3 = var2.INFREQUENT_USER_ACTION;
            var2 = 'userContent';
            var1 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = arg1;
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = 17;
                    var2 = var1[var6];
                    var1 = undefined;
                    var9 = var5.bind(var1)(var2);
                    var8 = var9.hasBit;
                    var7 = var3.dismissedContents;
                    var5 = _closure2_slot0;
                    var5 = var8.bind(var9)(var7, var5);
                    if(var5) { _fun0016_ip = 136; continue _fun0016 }
case 28:
                    var5 = false;
                    return var5;
case 136:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.removeBit;
                    var4 = var3.dismissedContents;
                    var2 = _closure2_slot0;
                    var2 = var5.bind(var6)(var4, var2);
                    var3['dismissedContents'] = var2;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var2, var1, var3);
            return var1;
        };
        var3['removeDismissedContent'] = var4;
        var4 = function removeDismissedRecurringContent(arg1) {
            var4 = _closure1_slot17;
            var3 = undefined;
            var2 = arg1;
            var1 = {'lastDismissedVersion': 0, 'lastDismissedAtMs': '0', 'lastDismissedObjectId': '0', 'numTimesDismissed': 0};
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['removeDismissedRecurringContent'] = var4;
        var4 = function clearGuildDismissedContents() {
            var4 = _closure1_slot15;
            var1 = _closure1_slot8;
            var3 = var1.INFREQUENT_USER_ACTION;
            var2 = undefined;
            var1 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.guilds;
                    var5 = null;
                    if(!(var5 != var2)) { _fun0017_ip = 137; continue _fun0017 }
case 138:
                    var4 = global;
                    var3 = var4.Object;
                    var2 = var3.values;
                    var1 = var1.guilds;
                    var3 = var2.bind(var3)(var1);
                    var1 = var3.length;
                    var2 = 0;
                    var1 = var2 < var1;
                    if(!var1) { _fun0017_ip = 137; continue _fun0017 }
case 104:
                    var6 = var3[var2];
                    if(!(var5 != var6)) { _fun0017_ip = 139; continue _fun0017 }
case 7:
                    var1 = {};
                    var6['guildDismissibleContentStates'] = var1;
                    var1 = var4.Uint8Array;
                    var7 = var1.prototype;
                    var7 = Object.create(var7, {constructor: {value: var1}});
                    var9 = var7;
                    var1 = new var9[var1](var8);
                    var1 = var1 instanceof Object ? var1 : var7;
                    var6['dismissedGuildContent'] = var1;
case 139:
                    var2 = var2 + 1;
                    var1 = var3.length;
                    if(var2 < var1) { _fun0017_ip = 104; continue _fun0017 }
case 137:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var2)(var1, var3);
            return var1;
        };
        var3['clearGuildDismissedContents'] = var4;
        var4 = function clearDismissedContents() {
            var5 = _closure1_slot12;
            var4 = var5.updateAsync;
            var1 = _closure1_slot8;
            var3 = var1.INFREQUENT_USER_ACTION;
            var2 = 'userContent';
            var1 = function(arg1) {
                var2 = arg1;
                var1 = global;
                var1 = var1.Uint8Array;
                var3 = var1.prototype;
                var3 = Object.create(var3, {constructor: {value: var1}});
                var4 = var3;
                var1 = new var4[var1](var3);
                var1 = var1 instanceof Object ? var1 : var3;
                var2['dismissedContents'] = var1;
                var1 = {};
                var2['recurringDismissibleContentStates'] = var1;
                var1 = undefined;
                return var1;
            };
            var1 = var4.bind(var5)(var2, var1, var3);
            return var1;
        };
        var3['clearDismissedContents'] = var4;
        var2 = function checkAllDismissedContents() {
            var5 = _closure1_slot12;
            var4 = var5.updateAsync;
            var1 = _closure1_slot8;
            var3 = var1.INFREQUENT_USER_ACTION;
            var2 = 'userContent';
            var1 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = arg1;
                    var1 = global;
                    var1 = var1.Uint8Array;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {constructor: {value: var1}});
                    var17 = var2;
                    var1 = new var17[var1](var16);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var5 = _closure1_slot13;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var10 = 20;
                    var4 = var1[var10];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.ALL_DISMISSIBLE_CONTENT;
                    var9 = var5.bind(var1)(var4);
                    var5 = var9.bind(var1)();
                    var4 = var5.done;
                    var8 = 17;
                    var7 = 21;
                    var6 = var5;
                    var5 = var2;
                    var2 = var5;
                    if(var4) { _fun0018_ip = 140; continue _fun0018 }
case 139:
                    var14 = var6.value;
                    var12 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var10];
                    var12 = var12.bind(var1)(var4);
                    var4 = var12.isSingleUseDismissibleContent;
                    var4 = var4.bind(var12)(var14);
                    if(var4) { _fun0018_ip = 82; continue _fun0018 }
case 141:
                    var12 = var3.recurringDismissibleContentStates;
                    var13 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var13 = var13.bind(var1)(var4);
                    var4 = var13.getDismissedRecurringDismissibleContentState;
                    var4 = var4.bind(var13)(var14);
                    var12[var14] = var4;
                    var12 = var5;
                    _fun0018_ip = 142; continue _fun0018;
case 82:
                    var13 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var13 = var13.bind(var1)(var4);
                    var4 = var13.addBit;
                    var12 = var4.bind(var13)(var5, var14);
case 142:
                    var13 = var9.bind(var1)();
                    var4 = var13.done;
                    var5 = var12;
                    var6 = var13;
                    var2 = var5;
                    if(!var4) { _fun0018_ip = 139; continue _fun0018 }
case 140:
                    var3['dismissedContents'] = var2;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var2, var1, var3);
            return var1;
        };
        var3['checkAllDismissedContents'] = var2;
        return var1;
    }
})();
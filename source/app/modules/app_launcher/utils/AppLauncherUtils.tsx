// app/modules/app_launcher/utils/AppLauncherUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var11;
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
            var9 = _closure1_slot13;
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
            var7 = _closure1_slot13;
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
    var _closure1_slot12 = var1;
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
    var _closure1_slot13 = var1;
    var7 = function isRealApplication(arg1) {
        var1 = arg1;
        var2 = var1.id;
        var1 = _closure1_slot10;
        var1 = var1.BUILT_IN;
        var1 = var2 !== var1;
        return var1;
    };
    var _closure1_slot14 = var7;
    var6 = function isEmbeddedApp(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot14;
            var6 = undefined;
            var1 = var1.bind(var6)(var3);
            if(!var1) { _fun0004_ip = 36; continue _fun0004 }
case 29:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 9;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.hasFlag;
            var6 = var3.flags;
            var3 = null;
            var7 = var3 != var6;
            var3 = 0;
            if(!var7) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var3 = var6;
case 37:
            var2 = _closure1_slot9;
            var2 = var2.EMBEDDED;
            var1 = var4.bind(var5)(var3, var2);
case 36:
            return var1;
        }
    };
    var _closure1_slot15 = var6;
    var5 = function getShelfBadgeTypeIfActive(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot17;
            var4 = undefined;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var3 = null;
            var6 = var3 == var1;
            var5 = undefined;
            if(var6) { _fun0005_ip = 39; continue _fun0005 }
case 34:
            var6 = var1.client_platform_config;
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 10;
            var1 = var9[var1];
            var7 = var7.bind(var4)(var1);
            var8 = _closure1_slot0;
            var1 = 11;
            var1 = var9[var1];
            var8 = var8.bind(var4)(var1);
            var1 = var8.getOS;
            var1 = var1.bind(var8)();
            var1 = var7.bind(var4)(var1);
            var5 = var6[var1];
case 39:
            var1 = global;
            var7 = var1.Date;
            var6 = var7.now;
            var6 = var6.bind(var7)();
            var8 = var3 == var5;
            var7 = undefined;
            if(var8) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var7 = var5.label_until;
case 40:
            if(!(var3 != var7)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var9 = var1.Date;
            var8 = var9.parse;
            var7 = var5.label_until;
            var7 = var8.bind(var9)(var7);
            if(!(var6 < var7)) { _fun0005_ip = 42; continue _fun0005 }
case 44:
            var8 = var3 == var5;
            var7 = undefined;
            if(var8) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var7 = var5.label_from;
case 45:
            if(!(var3 != var7)) { _fun0005_ip = 42; continue _fun0005 }
case 47:
            var8 = var1.Date;
            var7 = var8.parse;
            var1 = var5.label_from;
            var1 = var7.bind(var8)(var1);
            if(!(var6 > var1)) { _fun0005_ip = 42; continue _fun0005 }
case 48:
            var6 = var3 == var5;
            var1 = undefined;
            if(var6) { _fun0005_ip = 49; continue _fun0005 }
case 50:
            var1 = var5.label_type;
case 49:
            if(!(var3 == var1)) { _fun0005_ip = 18; continue _fun0005 }
case 42:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 12;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.EmbeddedActivityLabelTypes;
            var1 = var2.NONE;
case 18:
            return var1;
        }
    };
    var _closure1_slot16 = var5;
    var4 = function getEmbeddedActivityConfig(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot14;
            var6 = undefined;
            var4 = var1.bind(var6)(var3);
            var1 = null;
            if(!var4) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            var4 = _closure1_slot15;
            var4 = var4.bind(var6)(var3);
            var1 = null;
            if(!var4) { _fun0006_ip = 51; continue _fun0006 }
case 53:
            var2 = _closure1_slot7;
            var2 = var3 instanceof var2;
            if(var2) { _fun0006_ip = 4; continue _fun0006 }
case 54:
            var2 = var3.embedded_activity_config;
            _fun0006_ip = 7; continue _fun0006;
case 4:
            var2 = var3.embeddedActivityConfig;
case 7:
            var1 = var2;
case 51:
            return var1;
        }
    };
    var _closure1_slot17 = var4;
    var1 = ['fakeAppIconURL'];
    var _closure1_slot3 = var1;
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var8);
    var1 = 0;
    var8 = var11[var1];
    var1 = undefined;
    var8 = var9.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 1;
    var8 = var11[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 2;
    var8 = var11[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 3;
    var8 = var11[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 4;
    var8 = var11[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 5;
    var8 = var11[var8];
    var8 = var10.bind(var1)(var8);
    var8 = var8.ApplicationFlags;
    var _closure1_slot9 = var8;
    var8 = 6;
    var8 = var11[var8];
    var8 = var10.bind(var1)(var8);
    var9 = var8.BuiltInSectionId;
    var _closure1_slot10 = var9;
    var8 = 7;
    var8 = var11[var8];
    var8 = var10.bind(var1)(var8);
    var8 = var8.MessageSendLocation;
    var _closure1_slot11 = var8;
    var8 = {};
    var9 = var9.BUILT_IN;
    var8['id'] = var9;
    var9 = 23;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/app_launcher/utils/AppLauncherUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var3['FAKE_BUILT_IN_APP'] = var8;
    var3['isRealApplication'] = var7;
    var7 = function getSectionName(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot14;
            var6 = undefined;
            var3 = var3.bind(var6)(var2);
            if(var3) { _fun0007_ip = 55; continue _fun0007 }
case 29:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 8;
            var3 = var7[var1];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.UB2gGx;
            var1 = var3.bind(var4)(var1);
            _fun0007_ip = 56; continue _fun0007;
case 55:
            var1 = var2.name;
case 56:
            return var1;
        }
    };
    var3['getSectionName'] = var7;
    var7 = function getSectionDescription(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot14;
            var6 = undefined;
            var3 = var3.bind(var6)(var2);
            if(var3) { _fun0008_ip = 55; continue _fun0008 }
case 29:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 8;
            var3 = var7[var1];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.X9fusr;
            var1 = var3.bind(var4)(var1);
            _fun0008_ip = 56; continue _fun0008;
case 55:
            var1 = var2.description;
case 56:
            return var1;
        }
    };
    var3['getSectionDescription'] = var7;
    var3['isEmbeddedApp'] = var6;
    var6 = function isPartnerApplication(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot14;
            var6 = undefined;
            var1 = var1.bind(var6)(var3);
            if(!var1) { _fun0009_ip = 36; continue _fun0009 }
case 29:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 9;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.hasFlag;
            var6 = var3.flags;
            var3 = null;
            var7 = var3 != var6;
            var3 = 0;
            if(!var7) { _fun0009_ip = 37; continue _fun0009 }
case 38:
            var3 = var6;
case 37:
            var2 = _closure1_slot9;
            var2 = var2.PARTNER;
            var1 = var4.bind(var5)(var3, var2);
case 36:
            return var1;
        }
    };
    var3['isPartnerApplication'] = var6;
    var6 = function isPromotedApplication(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot14;
            var6 = undefined;
            var1 = var1.bind(var6)(var3);
            if(!var1) { _fun0010_ip = 36; continue _fun0010 }
case 29:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 9;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.hasFlag;
            var6 = var3.flags;
            var3 = null;
            var7 = var3 != var6;
            var3 = 0;
            if(!var7) { _fun0010_ip = 37; continue _fun0010 }
case 38:
            var3 = var6;
case 37:
            var2 = _closure1_slot9;
            var2 = var2.PROMOTED;
            var1 = var4.bind(var5)(var3, var2);
case 36:
            return var1;
        }
    };
    var3['isPromotedApplication'] = var6;
    var3['getShelfBadgeTypeIfActive'] = var5;
    var5 = function getShelfBadgeNameIfActive(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = _closure1_slot16;
            var4 = undefined;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = 12;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.EmbeddedActivityLabelTypes;
            var3 = var3.NEW;
            if(!(var3 !== var2)) { _fun0011_ip = 57; continue _fun0011 }
case 58:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.EmbeddedActivityLabelTypes;
            var1 = var1.UPDATED;
            if(!(var1 !== var2)) { _fun0011_ip = 59; continue _fun0011 }
case 9:
            var1 = '';
            return var1;
case 59:
            var1 = 'Updated';
            return var1;
case 57:
            var1 = 'New';
            return var1;
        }
    };
    var3['getShelfBadgeNameIfActive'] = var5;
    var3['getEmbeddedActivityConfig'] = var4;
    var4 = function executeAppLauncherCommand(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var1 = var2.command;
            var _closure2_slot0 = var1;
            var1 = var2.optionValues;
            var _closure2_slot1 = var1;
            var1 = var2.context;
            var _closure2_slot2 = var1;
            var4 = var2.commandTargetId;
            var _closure2_slot3 = var4;
            var4 = var2.maxSizeCallback;
            var _closure2_slot4 = var4;
            var4 = var2.sectionName;
            var _closure2_slot5 = var4;
            var4 = var2.commandOrigin;
            var2 = undefined;
            if(!(var4 === var2)) { _fun0012_ip = 60; continue _fun0012 }
case 61:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 13;
            var5 = var7[var5];
            var5 = var6.bind(var2)(var5);
            var5 = var5.CommandOrigin;
            var4 = var5.APPLICATION_LAUNCHER;
case 60:
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var2;
            var _closure2_slot8 = var2;
            var1 = var1.channel;
            _closure2_slot7 = var1;
            var1 = function() {
                var4 = _closure1_slot5;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0013_ip = 62; continue _fun0013 }
case 63:
                            var10 = undefined;
                            var6 = undefined;
                            var8 = undefined;
                            var4 = undefined;
case 64: // try_start_0
                            var5 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 14;
                            var2 = var7[var2];
                            var7 = var5.bind(var10)(var2);
                            var2 = {};
                            var9 = _closure2_slot0;
                            var2['command'] = var9;
                            var9 = _closure2_slot1;
                            var2['optionValues'] = var9;
                            var9 = _closure2_slot2;
                            var2['context'] = var9;
                            var9 = _closure2_slot3;
                            var2['commandTargetId'] = var9;
                            var9 = _closure2_slot4;
                            var2['maxSizeCallback'] = var9;
                            var9 = _closure2_slot6;
                            var2['commandOrigin'] = var9;
                            var9 = _closure2_slot5;
                            var2['sectionName'] = var9;
                            var11 = _closure1_slot8;
                            var9 = var11.entrypoint;
                            var9 = var9.bind(var11)();
                            var2['source'] = var9;
                            var2 = var7.bind(var10)(var2);
                            SaveGenerator(address=135);
case 65:
                            return var2;
case 66:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                            if(var7) { _fun0013_ip = 67; continue _fun0013 }
case 68:
                            var6 = var2;
                            var7 = _closure2_slot0;
                            var9 = var7.inputType;
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var7 = 13;
                            var7 = var12[var7];
                            var7 = var11.bind(var10)(var7);
                            var7 = var7.ApplicationCommandInputType;
                            var7 = var7.BUILT_IN_TEXT;
                            if(!(var9 === var7)) { _fun0013_ip = 69; continue _fun0013 }
case 70:
                            var7 = var6;
                            var11 = null;
                            if(!(var11 != var7)) { _fun0013_ip = 69; continue _fun0013 }
case 71:
                            var7 = _closure2_slot2;
                            var7 = var7.channel;
                            if(!(var11 != var7)) { _fun0013_ip = 69; continue _fun0013 }
case 72:
                            var9 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var7 = 15;
                            var7 = var12[var7];
                            var13 = var9.bind(var10)(var7);
                            var12 = var13.parse;
                            var7 = _closure2_slot7;
                            var9 = var6;
                            var6 = var9.content;
                            var7 = var12.bind(var13)(var7, var6);
                            var4 = var7;
                            var9 = var9.tts;
                            var8 = var9;
                            var9 = var11 != var9;
                            var6 = var9;
                            if(!var9) { _fun0013_ip = 73; continue _fun0013 }
case 74:
                            var6 = var8;
case 73:
                            var7['tts'] = var6;
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var6 = 16;
                            var6 = var8[var6];
                            var8 = var7.bind(var10)(var6);
                            var7 = var8.sendMessage;
                            var5 = _closure2_slot2;
                            var5 = var5.channel;
                            var17 = var5.id;
                            var16 = var4;
                            var4 = {};
                            var3 = _closure1_slot11;
                            var3 = var3.APP_COMMAND;
                            var4['location'] = var3;
                            var15 = true;
                            var18 = var8;
                            var14 = var4;
                            var3 = var18[var7](var17, var16, var15, var14, var13);
case 69: // try_end0
                            return var10;
case 67:
                            return var2;
case 75: // catch_target0
                            CatchBlockStart(arg_register=1);
                            var4 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var3 = 17;
                            var3 = var11[var3];
                            var5 = var4.bind(var10)(var3);
                            var4 = var5.show;
                            var3 = {};
                            var9 = _closure1_slot0;
                            var6 = 8;
                            var7 = var11[var6];
                            var7 = var9.bind(var10)(var7);
                            var12 = var7.intl;
                            var8 = var12.string;
                            var7 = var11[var6];
                            var7 = var9.bind(var10)(var7);
                            var7 = var7.t;
                            var7 = var7.aHO//v;
                            var7 = var8.bind(var12)(var7);
                            var3['title'] = var7;
                            var7 = var11[var6];
                            var7 = var9.bind(var10)(var7);
                            var12 = var7.intl;
                            var8 = var12.string;
                            var7 = var11[var6];
                            var7 = var9.bind(var10)(var7);
                            var7 = var7.t;
                            var7 = var7.kuzKHB;
                            var7 = var8.bind(var12)(var7);
                            var3['body'] = var7;
                            var7 = var11[var6];
                            var7 = var9.bind(var10)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var6 = var11[var6];
                            var6 = var9.bind(var10)(var6);
                            var6 = var6.t;
                            var6 = var6.5911LS;
                            var6 = var7.bind(var8)(var6);
                            var3['confirmText'] = var6;
                            var6 = function onConfirm() {
                                var2 = _closure2_slot8;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                                return var1;
                            };
                            var3['onConfirm'] = var6;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
case 62:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var1 = var1.bind(var2)();
            _closure2_slot8 = var1;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var3['executeAppLauncherCommand'] = var4;
    var4 = function getApplicationDetails(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var3 = arg1;
            var7 = arguments[1];
            var6 = undefined;
            if(!(var7 === var6)) { _fun0014_ip = 32; continue _fun0014 }
case 76:
            var7 = {};
case 32:
            var5 = var7.fakeAppIconURL;
            var2 = _closure1_slot4;
            var1 = _closure1_slot3;
            var7 = var2.bind(var6)(var7, var1);
            var1 = _closure1_slot14;
            var1 = var1.bind(var6)(var3);
            var2 = {};
            if(var1) { _fun0014_ip = 77; continue _fun0014 }
case 28:
            var1 = null;
            var8 = var1 != var5;
            if(!var8) { _fun0014_ip = 78; continue _fun0014 }
case 37:
            var1 = var5;
case 78:
            var2['iconURL'] = var1;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 8;
            var5 = var10[var1];
            var5 = var9.bind(var6)(var5);
            var11 = var5.intl;
            var8 = var11.string;
            var5 = var10[var1];
            var5 = var9.bind(var6)(var5);
            var5 = var5.t;
            var5 = var5.UB2gGx;
            var5 = var8.bind(var11)(var5);
            var2['name'] = var5;
            var5 = var10[var1];
            var5 = var9.bind(var6)(var5);
            var8 = var5.intl;
            var5 = var8.string;
            var1 = var10[var1];
            var1 = var9.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.X9fusr;
            var1 = var5.bind(var8)(var1);
            var2['description'] = var1;
            var1 = var2;
            _fun0014_ip = 79; continue _fun0014;
case 77:
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 18;
            var4 = var8[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.getApplicationIconURL;
            var4 = {};
            var13 = var4;
            var12 = var7;
            var7 = copyDataProperties(var13, var12);
            var8 = var3.id;
            var7 = 'id';
            var4[var7] = var8;
            var8 = var3.icon;
            var7 = 'icon';
            var4[var7] = var8;
            var4 = var5.bind(var6)(var4);
            var2['iconURL'] = var4;
            var4 = var3.name;
            var2['name'] = var4;
            var3 = var3.description;
            var2['description'] = var3;
            var1 = var2;
case 79:
            return var1;
        }
    };
    var3['getApplicationDetails'] = var4;
    var4 = function isApplicationMonetizedWithIAP(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot14;
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var1 = !var4;
            var1 = !var1;
            if(!var4) { _fun0015_ip = 80; continue _fun0015 }
case 81:
            var2 = _closure1_slot7;
            var2 = var3 instanceof var2;
            if(var2) { _fun0015_ip = 82; continue _fun0015 }
case 83:
            var2 = var3.is_monetized;
            _fun0015_ip = 84; continue _fun0015;
case 82:
            var2 = var3.isMonetized;
case 84:
            var1 = var2;
case 80:
            return var1;
        }
    };
    var3['isApplicationMonetizedWithIAP'] = var4;
    var4 = function isApplicationAdSupported(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var3 = _closure1_slot17;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0016_ip = 85; continue _fun0016 }
case 81:
            var1 = var2.displays_advertisements;
case 85:
            return var1;
        }
    };
    var3['isApplicationAdSupported'] = var4;
    var4 = function appLauncherShowsRecommendations(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 19;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.AppLauncherEntrypoint;
        var2 = var1.TEXT;
        var1 = arg1;
        var1 = var1 === var2;
        return var1;
    };
    var3['appLauncherShowsRecommendations'] = var4;
    var4 = function formatPrimaryEntryPointCommandName(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var2 = var1 == var5;
            var1 = '';
            if(var2) { _fun0017_ip = 61; continue _fun0017 }
case 86:
            var3 = var5.charAt;
            var2 = 0;
            var3 = var3.bind(var5)(var2);
            var2 = var3.toLocaleUpperCase;
            var3 = var2.bind(var3)();
            var4 = var5.slice;
            var2 = 1;
            var2 = var4.bind(var5)(var2);
            var5 = var3 + var2;
            var4 = var5.replaceAll;
            var3 = '_';
            var2 = ' ';
            var1 = var4.bind(var5)(var3, var2);
case 61:
            return var1;
        }
    };
    var3['formatPrimaryEntryPointCommandName'] = var4;
    var4 = function ensureRecommendationSectionsOnlyContainActivities(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = new Array(0);
            var3 = _closure1_slot12;
            var7 = undefined;
            var2 = arg1;
            var6 = var3.bind(var7)(var2);
            var3 = var6.bind(var7)();
            var2 = var3.done;
            var5 = 'application_directory_collection_items';
            var4 = 0;
            if(var2) { _fun0018_ip = 87; continue _fun0018 }
case 88:
            var11 = var3.value;
            var10 = var11.application_directory_collection_items;
            var9 = var10.filter;
            var2 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var2 = arg1;
                    var5 = var2.type;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 20;
                    var1 = var4[var1];
                    var4 = undefined;
                    var1 = var6.bind(var4)(var1);
                    var1 = var1.ApplicationDirectoryCollectionItemType;
                    var1 = var1.APPLICATION;
                    var1 = var5 === var1;
                    if(!var1) { _fun0019_ip = 89; continue _fun0019 }
case 90:
                    var3 = _closure1_slot15;
                    var2 = var2.application;
                    var1 = var3.bind(var4)(var2);
case 89:
                    return var1;
                }
            };
            var10 = var9.bind(var10)(var2);
            var2 = var10.length;
            if(!(var4 !== var2)) { _fun0018_ip = 91; continue _fun0018 }
case 61:
            var9 = var1.push;
            var2 = {};
            var13 = var2;
            var12 = var11;
            var11 = copyDataProperties(var13, var12);
            var2[var5] = var10;
            var2 = var9.bind(var1)(var2);
case 91:
            var9 = var6.bind(var7)();
            var2 = var9.done;
            var3 = var9;
            if(!var2) { _fun0018_ip = 88; continue _fun0018 }
case 87:
            return var1;
        }
    };
    var3['ensureRecommendationSectionsOnlyContainActivities'] = var4;
    var4 = function getInstallAppPropsFromProfileApplication(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.id;
        var1['applicationId'] = var3;
        var3 = var2.customInstallUrl;
        var1['customInstallUrl'] = var3;
        var3 = var2.installParams;
        var1['installParams'] = var3;
        var2 = var2.integrationTypesConfig;
        var1['integrationTypesConfig'] = var2;
        return var1;
    };
    var3['getInstallAppPropsFromProfileApplication'] = var4;
    var4 = function getInstallAppProps(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot7;
            var1 = var3 instanceof var1;
            var2 = {};
            var4 = var3.id;
            var2['applicationId'] = var4;
            if(var1) { _fun0020_ip = 89; continue _fun0020 }
case 34:
            var1 = var3.custom_install_url;
            var2['customInstallUrl'] = var1;
            var1 = var3.install_params;
            var2['installParams'] = var1;
            var1 = var3.integration_types_config;
            var2['integrationTypesConfig'] = var1;
            var1 = var2;
            _fun0020_ip = 92; continue _fun0020;
case 89:
            var4 = var3.customInstallUrl;
            var2['customInstallUrl'] = var4;
            var4 = var3.installParams;
            var2['installParams'] = var4;
            var3 = var3.integrationTypesConfig;
            var2['integrationTypesConfig'] = var3;
            var1 = var2;
case 92:
            return var1;
        }
    };
    var3['getInstallAppProps'] = var4;
    var2 = function isAppAvailableInAppLauncher(arg1, arg2) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var4 = arg1;
            var5 = arg2;
            var1 = null;
            var2 = var1 != var5;
            var6 = null;
            if(!var2) { _fun0021_ip = 83; continue _fun0021 }
case 93:
            var3 = _closure1_slot6;
            var2 = var3.getGuildState;
            var6 = var2.bind(var3)(var5);
case 83:
            var2 = var1 != var6;
            if(!var2) { _fun0021_ip = 9; continue _fun0021 }
case 94:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 21;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var3);
            var3 = var5.hasCommandIndexForApp;
            var1 = var4.id;
            var2 = var3.bind(var5)(var1, var6);
case 9:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 22;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var1 = var3.isAppUserInstallable;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0021_ip = 95; continue _fun0021 }
case 43:
            var1 = var2;
case 95:
            return var1;
        }
    };
    var3['isAppAvailableInAppLauncher'] = var2;
    return var1;
})();
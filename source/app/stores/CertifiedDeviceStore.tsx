// app/stores/CertifiedDeviceStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function getOrElse(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg2;
            var3 = _closure1_slot10;
            var2 = arg1;
            var4 = var3[var2];
            var2 = null;
            if(!(var2 != var4)) { _fun0002_ip = 33; continue _fun0002 }
 23:
            var3 = arg3;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
 33:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function updateDevicesForApplication(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var3 = arg2;
            var5 = _closure1_slot9;
            var7 = var5[var4];
            var5 = null;
            if(!(var5 != var7)) { _fun0003_ip = 40; continue _fun0003 }
 25:
            var6 = var7.forEach;
            var5 = function(arg1) {
                var2 = _closure1_slot10;
                var1 = arg1;
                var1 = var1.id;
                var1 = delete var2[var1];
                return var1;
            };
            var5 = var6.bind(var7)(var5);
 40:
            var2 = _closure1_slot9;
            var2[var4] = var3;
            var2 = var3.forEach;
            var1 = function(arg1) {
                var1 = arg1;
                var3 = _closure1_slot10;
                var2 = var1.id;
                var3[var2] = var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var2 = 0;
    var8 = var6[var2];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.DeviceTypes;
    var _closure1_slot8 = var8;
    var8 = {};
    var _closure1_slot9 = var8;
    var8 = {};
    var _closure1_slot10 = var8;
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function CertifiedDeviceStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 69; continue _fun0004 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 105; continue _fun0004;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
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
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var5 = var3.Storage;
                var4 = var5.get;
                var3 = 'CertifiedDeviceStore';
                var5 = var4.bind(var5)(var3);
                var3 = null;
                if(!(var3 != var5)) { _fun0005_ip = 91; continue _fun0005 }
 53:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 7;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.forEach;
                var2 = function(arg1, arg2) {
                    var4 = arg1;
                    var2 = var4.forEach;
                    var1 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var2 = arg1;
                            var3 = var2.type;
                            var1 = 'audioinput';
                            var1 = var1 === var3;
                            if(!var1) { _fun0006_ip = 27; continue _fun0006 }
 21:
                            var1 = var2.hardwareMute;
 27:
                            if(!var1) { _fun0006_ip = 38; continue _fun0006 }
 30:
                            var1 = false;
                            var2['hardwareMute'] = var1;
 38:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var4)(var1);
                    var3 = _closure1_slot14;
                    var1 = undefined;
                    var2 = arg2;
                    var2 = var3.bind(var1)(var2, var4);
                    return var1;
                };
                var2 = var3.bind(var4)(var5, var2);
 91:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(12);
        var1[0] = var5;
        var5 = {};
        var7 = 'isCertified';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot10;
            var1 = arg1;
            var2 = var2[var1];
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getCertifiedDevice';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot10;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getCertifiedDeviceName';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = arg2;
                var4 = this;
                var3 = var4.getCertifiedDevice;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                var3 = null;
                if(!(var3 != var2)) { _fun0007_ip = 78; continue _fun0007 }
 28:
                var3 = var2.vendor;
                var6 = var3.name;
                var2 = var2.model;
                var5 = var2.name;
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '';
                var2 = ' ';
                var1 = var4.bind(var3)(var6, var2, var5);
 78:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getCertifiedDeviceByType';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 7;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.find;
            var2 = _closure1_slot10;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isHardwareMute';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var5 = _closure1_slot13;
            var4 = undefined;
            var3 = arg1;
            var2 = false;
            var1 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.type;
                    var1 = _closure1_slot8;
                    var1 = var1.AUDIO_INPUT;
                    var1 = var3 === var1;
                    if(!var1) { _fun0008_ip = 34; continue _fun0008 }
 28:
                    var1 = var2.hardwareMute;
 34:
                    return var1;
                }
            };
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'hasEchoCancellation';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var5 = _closure1_slot13;
            var4 = undefined;
            var3 = arg1;
            var2 = false;
            var1 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.type;
                    var1 = _closure1_slot8;
                    var1 = var1.AUDIO_INPUT;
                    var1 = var3 === var1;
                    if(!var1) { _fun0009_ip = 34; continue _fun0009 }
 28:
                    var1 = var2.echoCancellation;
 34:
                    return var1;
                }
            };
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'hasNoiseSuppression';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var5 = _closure1_slot13;
            var4 = undefined;
            var3 = arg1;
            var2 = false;
            var1 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.type;
                    var1 = _closure1_slot8;
                    var1 = var1.AUDIO_INPUT;
                    var1 = var3 === var1;
                    if(!var1) { _fun0010_ip = 34; continue _fun0010 }
 28:
                    var1 = var2.noiseSuppression;
 34:
                    return var1;
                }
            };
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'hasAutomaticGainControl';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var5 = _closure1_slot13;
            var4 = undefined;
            var3 = arg1;
            var2 = false;
            var1 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.type;
                    var1 = _closure1_slot8;
                    var1 = var1.AUDIO_INPUT;
                    var1 = var3 === var1;
                    if(!var1) { _fun0011_ip = 34; continue _fun0011 }
 28:
                    var1 = var2.automaticGainControl;
 34:
                    return var1;
                }
            };
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getVendor';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var5 = _closure1_slot13;
            var4 = undefined;
            var3 = arg1;
            var2 = null;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.vendor;
                return var1;
            };
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getModel';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var5 = _closure1_slot13;
            var4 = undefined;
            var3 = arg1;
            var2 = null;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.model;
                return var1;
            };
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getRevision';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var6;
        var1[11] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'CertifiedDeviceStore';
    var8['displayName'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var4 = function handleSetCertifiedDevices(arg1) {
        var1 = arg1;
        var5 = var1.applicationId;
        var4 = var1.devices;
        var2 = _closure1_slot14;
        var1 = undefined;
        var2 = var2.bind(var1)(var5, var4);
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 6;
        var2 = var5[var2];
        var2 = var4.bind(var1)(var2);
        var6 = var2.Storage;
        var5 = var6.set;
        var4 = _closure1_slot9;
        var2 = 'CertifiedDeviceStore';
        var2 = var5.bind(var6)(var2, var4);
        var2 = _closure1_slot11;
        var2 = var2 + 1;
        _closure1_slot11 = var2;
        return var1;
    };
    var2['CERTIFIED_DEVICES_SET'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/CertifiedDeviceStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
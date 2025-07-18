// app/utils/ExperimentUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
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
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
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
            var9 = _closure1_slot8;
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
            var7 = _closure1_slot8;
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
 344:
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
    var7 = function getFirstEligibleUserExperiment(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = _closure1_slot7;
            var7 = undefined;
            var1 = arg1;
            var6 = var2.bind(var7)(var1);
            var3 = var6.bind(var7)();
            var2 = var3.done;
            var1 = null;
            var5 = var3;
            if(var2) { _fun0004_ip = 89; continue _fun0004 }
 34:
            var4 = var5.value;
            var3 = _closure1_slot4;
            var2 = var3.getUserExperimentDescriptor;
            var3 = var2.bind(var3)(var4);
            if(!(var1 == var3)) { _fun0004_ip = 75; continue _fun0004 }
 58:
            var9 = var6.bind(var7)();
            var2 = var9.done;
            var5 = var9;
            if(var2) { _fun0004_ip = 89; continue _fun0004 }
 73:
            _fun0004_ip = 34; continue _fun0004;
 75:
            var2 = new Array(2);
            var2[0] = var4;
            var2[1] = var3;
            return var2;
 89:
            return var1;
        }
    };
    var _closure1_slot9 = var7;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.ExperimentTypes;
    var _closure1_slot5 = var8;
    var2 = var2.ExperimentBuckets;
    var _closure1_slot6 = var2;
    var2 = {};
    var2['getFirstEligibleUserExperiment'] = var7;
    var7 = function isInExperimentBucket(arg1, arg2) {
        var3 = _closure1_slot4;
        var2 = var3.getUserExperimentBucket;
        var1 = arg1;
        var2 = var2.bind(var3)(var1);
        var1 = arg2;
        var1 = var2 === var1;
        return var1;
    };
    var2['isInExperimentBucket'] = var7;
    var7 = function experimentDescriptorEquals(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var1 = arg2;
            var3 = null;
            if(!(var3 == var2)) { _fun0005_ip = 19; continue _fun0005 }
 12:
            if(!(var3 != var1)) { _fun0005_ip = 220; continue _fun0005 }
 19:
            if(!(var2 !== var1)) { _fun0005_ip = 216; continue _fun0005 }
 26:
            if(!(var3 == var2)) { _fun0005_ip = 37; continue _fun0005 }
 30:
            if(!(var3 == var1)) { _fun0005_ip = 212; continue _fun0005 }
 37:
            if(!(var3 != var2)) { _fun0005_ip = 48; continue _fun0005 }
 41:
            if(!(var3 != var1)) { _fun0005_ip = 208; continue _fun0005 }
 48:
            if(!(var3 != var2)) { _fun0005_ip = 146; continue _fun0005 }
 52:
            if(!(var3 != var1)) { _fun0005_ip = 146; continue _fun0005 }
 56:
            var4 = var2.type;
            var3 = var1.type;
            if(!(var4 === var3)) { _fun0005_ip = 204; continue _fun0005 }
 73:
            var4 = var2.bucket;
            var3 = var1.bucket;
            if(!(var4 === var3)) { _fun0005_ip = 200; continue _fun0005 }
 89:
            var4 = var2.revision;
            var3 = var1.revision;
            if(!(var4 === var3)) { _fun0005_ip = 196; continue _fun0005 }
 105:
            var5 = var2.type;
            var4 = _closure1_slot5;
            var4 = var4.USER;
            if(!(var5 === var4)) { _fun0005_ip = 146; continue _fun0005 }
 127:
            var5 = var1.type;
            var4 = _closure1_slot5;
            var4 = var4.USER;
            if(!(var5 !== var4)) { _fun0005_ip = 150; continue _fun0005 }
 146:
            var4 = true;
            return var4;
 150:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 4;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.isEqual;
            var2 = var2.context;
            var1 = var1.context;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 196:
            var1 = false;
            return var1;
 200:
            var1 = false;
            return var1;
 204:
            var1 = false;
            return var1;
 208:
            var1 = false;
            return var1;
 212:
            var1 = false;
            return var1;
 216:
            var1 = true;
            return var1;
 220:
            var1 = true;
            return var1;
        }
    };
    var2['experimentDescriptorEquals'] = var7;
    var7 = function trackExposureToFirstEligibleUserExperiment(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = _closure1_slot9;
            var5 = undefined;
            var1 = arg1;
            var4 = var3.bind(var5)(var1);
            var1 = null;
            if(!(var1 == var4)) { _fun0006_ip = 25; continue _fun0006 }
 23:
            return var5;
 25:
            var3 = _closure1_slot3;
            var1 = 2;
            var3 = var3.bind(var5)(var4, var1);
            var1 = 0;
            var4 = var3[var1];
            var1 = 1;
            var1 = var3[var1];
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 3;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.trackExposureToExperiment;
            var2 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var2['trackExposureToFirstEligibleUserExperiment'] = var7;
    var4 = function getExperimentBucketName(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var5 = arg1;
            var1 = _closure1_slot6;
            var3 = var1.CONTROL;
            var1 = 'Control';
            if(!(var5 !== var3)) { _fun0007_ip = 71; continue _fun0007 }
 24:
            var2 = _closure1_slot6;
            var3 = var2.NOT_ELIGIBLE;
            var2 = 'Not Eligible';
            if(!(var5 !== var3)) { _fun0007_ip = 68; continue _fun0007 }
 44:
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = 'Treatment ';
            var2 = var4.bind(var3)(var5);
 68:
            var1 = var2;
 71:
            return var1;
        }
    };
    var2['getExperimentBucketName'] = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/ExperimentUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
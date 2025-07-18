// app/modules/canvas/canvases/useSimpleConfetti.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var9 = 0;
    var4 = var6[var9];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var8 = 1;
    var7 = var6[var8];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = {};
    var4['FREE'] = var9;
    var7 = 'FREE';
    var4[var9] = var7;
    var4['ACTIVE'] = var8;
    var7 = 'ACTIVE';
    var4[var8] = var7;
    var _closure1_slot5 = var4;
    var4 = function _getWeightedScale() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = global;
            var2 = var1.Math;
            var1 = var2.random;
            var2 = var1.bind(var2)();
            var1 = 0.15;
            if(!(!(var2 < var1))) { _fun0001_ip = 160; continue _fun0001 }
 35:
            var1 = 0.8;
            if(!(!(var2 < var1))) { _fun0001_ip = 108; continue _fun0001 }
 49:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.random;
            var2 = 1.3;
            var1 = 1.75;
            var1 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 158; continue _fun0001;
 108:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var4 = var5.random;
            var3 = 1;
            var2 = 1.3;
            var1 = var4.bind(var5)(var3, var2);
 158:
            _fun0001_ip = 210; continue _fun0001;
 160:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var4 = var5.random;
            var3 = 0.8;
            var2 = 1;
            var1 = var4.bind(var5)(var3, var2);
 210:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var4 = function isParticleOffscreen(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var2 = arg2;
            var1 = var3.position;
            var4 = var1.y;
            var1 = var2.h;
            var1 = var4 > var1;
            if(var1) { _fun0002_ip = 48; continue _fun0002 }
 28:
            var4 = var3.position;
            var5 = var4.x;
            var4 = -128;
            var1 = var5 < var4;
 48:
            if(var1) { _fun0002_ip = 70; continue _fun0002 }
 51:
            var3 = var3.position;
            var3 = var3.x;
            var2 = var2.w;
            var1 = var3 > var2;
 70:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var4 = function sortParticles(arg1) {
        var2 = arg1;
        var3 = var2.particles;
        var3 = var3.current;
        var _closure2_slot0 = var3;
        var3 = var2.particleStates;
        var3 = var3.current;
        var _closure2_slot1 = var3;
        var2 = var2.sortedParticles;
        var3 = var2.current;
        var2 = var3.sort;
        var1 = function(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var5 = arg1;
                var6 = arg2;
                var1 = _closure2_slot1;
                var3 = var1[var5];
                var2 = var1[var6];
                if(!(var3 === var2)) { _fun0003_ip = 74; continue _fun0003 }
 25:
                var1 = _closure1_slot5;
                var7 = var1.ACTIVE;
                var1 = 0;
                if(!(var3 === var7)) { _fun0003_ip = 72; continue _fun0003 }
 44:
                var4 = _closure2_slot0;
                var5 = var4[var5];
                var5 = var5.scale;
                var4 = var4[var6];
                var4 = var4.scale;
                var1 = var5 - var4;
 72:
                _fun0003_ip = 78; continue _fun0003;
 74:
                var1 = var3 - var2;
 78:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/canvas/canvases/useSimpleConfetti.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var2 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var11 = _closure1_slot4;
            var5 = var11.useState;
            var3 = {};
            var7 = var2.h;
            var6 = 0.9;
            var6 = var6 * var7;
            var3['y'] = var6;
            var7 = var2.w;
            var6 = 0.6;
            var6 = var6 * var7;
            var3['x'] = var6;
            var3 = var5.bind(var11)(var3);
            var16 = _closure1_slot3;
            var15 = undefined;
            var14 = 2;
            var3 = var16.bind(var15)(var3, var14);
            var4 = 0;
            var9 = var3[var4];
            var13 = 1;
            var3 = var3[var13];
            var _closure3_slot1 = var3;
            var5 = var11.useState;
            var3 = 1200;
            var3 = var5.bind(var11)(var3);
            var3 = var16.bind(var15)(var3, var14);
            var8 = var3[var4];
            var3 = var3[var13];
            var5 = var11.useState;
            var3 = 0.94;
            var3 = var5.bind(var11)(var3);
            var3 = var16.bind(var15)(var3, var14);
            var7 = var3[var4];
            var3 = var3[var13];
            var3 = var11.useState;
            var3 = var3.bind(var11)(var4);
            var3 = var16.bind(var15)(var3, var14);
            var6 = var3[var4];
            var3 = var3[var13];
            var3 = var11.useState;
            var12 = 15;
            var3 = var3.bind(var11)(var12);
            var3 = var16.bind(var15)(var3, var14);
            var5 = var3[var4];
            var3 = var3[var13];
            var _closure3_slot2 = var3;
            var10 = var11.useState;
            var3 = 180;
            var3 = var10.bind(var11)(var3);
            var10 = var16.bind(var15)(var3, var14);
            var3 = var10[var4];
            var10 = var10[var13];
            var _closure3_slot3 = var10;
            var17 = var11.useState;
            var10 = 60;
            var10 = var17.bind(var11)(var10);
            var10 = var16.bind(var15)(var10, var14);
            var4 = var10[var4];
            var _closure3_slot4 = var4;
            var10 = var10[var13];
            var _closure3_slot5 = var10;
            var13 = var11.useEffect;
            var14 = var2.h;
            var10 = new Array(2);
            var10[0] = var14;
            var2 = var2.w;
            var10[1] = var2;
            var2 = function() {
                var3 = _closure3_slot1;
                var2 = {};
                var1 = _closure3_slot0;
                var5 = var1.h;
                var4 = 1.2;
                var4 = var4 * var5;
                var2['y'] = var4;
                var4 = var1.w;
                var1 = 0.8;
                var1 = var1 * var4;
                var2['x'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var13.bind(var11)(var2, var10);
            var10 = var11.useCallback;
            var2 = new Array(2);
            var2[0] = var4;
            var2[1] = var12;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure3_slot4;
                    var3 = 60;
                    if(!(var3 !== var4)) { _fun0004_ip = 102; continue _fun0004 }
 16:
                    var4 = _closure3_slot2;
                    var5 = undefined;
                    var3 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var1 = arg1;
                            var2 = global;
                            var5 = var2.Math;
                            var4 = var5.max;
                            var6 = var2.Math;
                            var3 = var6.floor;
                            var2 = 0.75;
                            var2 = var2 * var1;
                            var3 = var3.bind(var6)(var2);
                            var2 = 3;
                            var4 = var4.bind(var5)(var2, var3);
                            var _closure4_slot0 = var4;
                            var3 = null;
                            if(!(var3 != var4)) { _fun0005_ip = 73; continue _fun0005 }
 69:
                            var1 = _closure4_slot0;
 73:
                            return var1;
                        }
                    };
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure3_slot3;
                    var3 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var1 = arg1;
                            var2 = global;
                            var5 = var2.Math;
                            var4 = var5.max;
                            var6 = var2.Math;
                            var3 = var6.floor;
                            var2 = 0.8;
                            var2 = var2 * var1;
                            var3 = var3.bind(var6)(var2);
                            var2 = 6;
                            var4 = var4.bind(var5)(var2, var3);
                            var _closure4_slot1 = var4;
                            var3 = null;
                            if(!(var3 != var4)) { _fun0006_ip = 73; continue _fun0006 }
 69:
                            var1 = _closure4_slot1;
 73:
                            return var1;
                        }
                    };
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure4_slot0;
                    var3 = null;
                    var3 = var3 != var4;
                    if(!var3) { _fun0004_ip = 81; continue _fun0004 }
 63:
                    var6 = _closure4_slot0;
                    var4 = 8.4375;
                    var3 = var6 < var4;
 81:
                    if(!var3) { _fun0004_ip = 120; continue _fun0004 }
 84:
                    var4 = _closure3_slot5;
                    var3 = function() {
                        var1 = 28;
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
                    _fun0004_ip = 120; continue _fun0004;
 102:
                    var3 = _closure3_slot5;
                    var2 = undefined;
                    var1 = function() {
                        var1 = 45;
                        return var1;
                    };
                    var1 = var3.bind(var2)(var1);
 120:
                    var1 = true;
                    return var1;
                }
            };
            var2 = var10.bind(var11)(var1, var2);
            var1 = {};
            var1['SPEED'] = var9;
            var1['GRAVITY'] = var8;
            var1['DRAG'] = var7;
            var1['Y_POS'] = var6;
            var1['PARTICLES_PER_EMISSION'] = var5;
            var1['MAX_PARTICLES'] = var3;
            var3 = 1000;
            var3 = var3 / var4;
            var1['tickRate'] = var3;
            var1['improvePerformance'] = var2;
            return var1;
        };
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        var2 = var1.SPEED;
        var _closure2_slot1 = var2;
        var2 = var1.GRAVITY;
        var _closure2_slot2 = var2;
        var2 = var1.DRAG;
        var _closure2_slot3 = var2;
        var2 = var1.Y_POS;
        var _closure2_slot4 = var2;
        var2 = var1.PARTICLES_PER_EMISSION;
        var _closure2_slot5 = var2;
        var7 = var1.MAX_PARTICLES;
        var _closure2_slot6 = var7;
        var4 = var1.tickRate;
        var3 = var1.improvePerformance;
        var1 = {};
        var6 = _closure1_slot4;
        var9 = var6.useRef;
        var2 = global;
        var8 = var2.Array;
        var10 = var8.prototype;
        var10 = Object.create(var10, {constructor: {value: var8}});
        var15 = var10;
        var14 = var7;
        var8 = new var15[var8](var14, var13);
        var8 = var8 instanceof Object ? var8 : var10;
        var8 = var9.bind(var6)(var8);
        var1['particles'] = var8;
        var9 = var6.useRef;
        var8 = var2.Uint8Array;
        var10 = var8.prototype;
        var10 = Object.create(var10, {constructor: {value: var8}});
        var15 = var10;
        var14 = var7;
        var8 = new var15[var8](var14, var13);
        var8 = var8 instanceof Object ? var8 : var10;
        var8 = var9.bind(var6)(var8);
        var1['particleStates'] = var8;
        var8 = var6.useRef;
        var10 = var2.Uint16Array;
        var12 = var2.Array;
        var11 = var12.from;
        var9 = {};
        var9['length'] = var7;
        var2 = function(arg1, arg2) {
            var1 = arg2;
            return var1;
        };
        var14 = var11.bind(var12)(var9, var2);
        var9 = var10.prototype;
        var9 = Object.create(var9, {constructor: {value: var10}});
        var15 = var9;
        var2 = new var15[var10](var14, var13);
        var2 = var2 instanceof Object ? var2 : var9;
        var2 = var8.bind(var6)(var2);
        var1['sortedParticles'] = var2;
        var2 = var6.useRef;
        var2 = var2.bind(var6)(var7);
        var1['freeParticles'] = var2;
        var7 = var6.useRef;
        var2 = 0;
        var2 = var7.bind(var6)(var2);
        var1['activeParticles'] = var2;
        var _closure2_slot7 = var1;
        var2 = var6.useRef;
        var1 = false;
        var2 = var2.bind(var6)(var1);
        var _closure2_slot8 = var2;
        var1 = {};
        var6 = function update(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var10 = arg1;
                var2 = _closure2_slot7;
                var2 = var2.activeParticles;
                var2 = var2.current;
                var3 = 0;
                if(!(var3 !== var2)) { _fun0007_ip = 429; continue _fun0007 }
 30:
                var2 = _closure2_slot7;
                var4 = var2.particleStates;
                var9 = var4.current;
                var2 = var2.particles;
                var8 = var2.current;
                var2 = _closure2_slot6;
                var2 = var3 < var2;
                var6 = 1;
                var5 = undefined;
                var4 = 0;
                if(!var2) { _fun0007_ip = 398; continue _fun0007 }
 80:
                var11 = var9[var4];
                var2 = _closure1_slot5;
                var2 = var2.FREE;
                if(!(var11 !== var2)) { _fun0007_ip = 384; continue _fun0007 }
 101:
                var12 = var8[var4];
                var11 = var12.position;
                var13 = var11.x;
                var2 = var12.velocity;
                var2 = var2.x;
                var2 = var2 * var10;
                var2 = var13 - var2;
                var11['x'] = var2;
                var11 = var12.position;
                var13 = var11.y;
                var2 = var12.velocity;
                var2 = var2.y;
                var2 = var2 * var10;
                var2 = var13 - var2;
                var11['y'] = var2;
                var13 = var12.velocity;
                var14 = var13.x;
                var2 = _closure2_slot3;
                var16 = var2;
                var15 = var10;
                var11 = exponentiationOperator(var16, var15);
                var11 = var14 * var11;
                var13['x'] = var11;
                var11 = var12.velocity;
                var13 = var11.y;
                var16 = var2;
                var15 = var10;
                var2 = exponentiationOperator(var16, var15);
                var2 = var13 * var2;
                var11['y'] = var2;
                var11 = var12.rotation;
                var2 = var12.angularVelocity;
                var2 = var2 * var10;
                var2 = var11 + var2;
                var12['rotation'] = var2;
                var11 = var12.velocity;
                var13 = var11.y;
                var2 = _closure2_slot2;
                var2 = var2 * var10;
                var2 = var13 - var2;
                var11['y'] = var2;
                var11 = _closure1_slot7;
                var2 = _closure2_slot0;
                var2 = var11.bind(var5)(var12, var2);
                if(!var2) { _fun0007_ip = 384; continue _fun0007 }
 313:
                var2 = _closure2_slot7;
                var11 = var2.particleStates;
                var12 = var11.current;
                var11 = _closure1_slot5;
                var11 = var11.FREE;
                var12[var4] = var11;
                var12 = var2.activeParticles;
                var11 = var12.current;
                var11 = var11 - var6;
                var12['current'] = var11;
                var11 = var2.freeParticles;
                var2 = var11.current;
                var2 = var2 + var6;
                var11['current'] = var2;
 384:
                var4 = var4 + 1;
                var2 = _closure2_slot6;
                if(var4 < var2) { _fun0007_ip = 80; continue _fun0007 }
 398:
                var2 = _closure2_slot7;
                var2 = var2.activeParticles;
                var2 = var2.current;
                if(!(var3 === var2)) { _fun0007_ip = 429; continue _fun0007 }
 417:
                var2 = _closure2_slot8;
                var1 = false;
                var2['current'] = var1;
 429:
                var1 = undefined;
                return var1;
            }
        };
        var1['update'] = var6;
        var6 = function draw(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var3 = arg1;
                var _closure3_slot0 = var3;
                var2 = var3.clearRect;
                var1 = {'x': 0, 'y': 0};
                var5 = 0;
                var7 = _closure2_slot0;
                var8 = var7.w;
                var1['w'] = var8;
                var7 = var7.h;
                var1['h'] = var7;
                var1 = var2.bind(var3)(var1);
                var1 = _closure2_slot7;
                var1 = var1.activeParticles;
                var1 = var1.current;
                if(!(var5 !== var1)) { _fun0008_ip = 170; continue _fun0008 }
 76:
                var1 = _closure2_slot7;
                var2 = var1.particleStates;
                var2 = var2.current;
                var _closure3_slot1 = var2;
                var2 = var1.particles;
                var2 = var2.current;
                var _closure3_slot2 = var2;
                var1 = var1.sortedParticles;
                var1 = var1.current;
                var _closure3_slot3 = var1;
                var3 = function _loop() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var4 = _closure3_slot3;
                        var3 = _closure3_slot4;
                        var5 = var4[var3];
                        var3 = _closure3_slot1;
                        var6 = var3[var5];
                        var3 = _closure1_slot5;
                        var3 = var3.FREE;
                        if(!(var6 !== var3)) { _fun0009_ip = 598; continue _fun0009 }
 45:
                        var3 = _closure3_slot2;
                        var3 = var3[var5];
                        var _closure4_slot0 = var3;
                        var12 = null;
                        if(!(var12 != var3)) { _fun0009_ip = 594; continue _fun0009 }
 66:
                        var5 = var3.position;
                        var9 = var5.x;
                        var5 = var5.y;
                        var8 = var3.scale;
                        var6 = 1.3;
                        if(!(var8 >= var6)) { _fun0009_ip = 172; continue _fun0009 }
 101:
                        var11 = _closure3_slot0;
                        var10 = var11.setFilter;
                        var7 = {};
                        var14 = var3.scale;
                        var13 = 1;
                        var17 = var14 - var13;
                        var13 = global;
                        var16 = var13.Math;
                        var15 = var16.round;
                        var14 = 4;
                        var13 = 3;
                        var13 = var13 * var17;
                        var13 = var14 * var13;
                        var13 = var15.bind(var16)(var13);
                        var13 = var13 / var14;
                        var7['blur'] = var13;
                        var7 = var10.bind(var11)(var7);
 172:
                        var7 = var8;
                        if(!(var7 >= var6)) { _fun0009_ip = 189; continue _fun0009 }
 179:
                        var19 = 2;
                        var20 = var8;
                        var7 = exponentiationOperator(var20, var19);
 189:
                        var6 = _closure3_slot0;
                        var10 = var6.assetMap;
                        if(!(var12 != var10)) { _fun0009_ip = 224; continue _fun0009 }
 203:
                        var8 = var10.has;
                        var6 = var3.key;
                        var6 = var8.bind(var10)(var6);
                        if(var6) { _fun0009_ip = 472; continue _fun0009 }
 224:
                        var8 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var6 = 3;
                        var6 = var10[var6];
                        var10 = undefined;
                        var11 = var8.bind(var10)(var6);
                        var8 = var11.contentHasUnicodeOrEmoji;
                        var6 = var3.key;
                        var6 = var8.bind(var11)(var6);
                        var11 = var3.scale;
                        var8 = 24;
                        var8 = var8 * var11;
                        var11 = {};
                        var13 = 2;
                        var13 = var8 / var13;
                        var14 = var9 + var13;
                        var11['x'] = var14;
                        var13 = var5 + var13;
                        var11['y'] = var13;
                        if(!(var12 == var6)) { _fun0009_ip = 423; continue _fun0009 }
 304:
                        var14 = _closure3_slot0;
                        var12 = var14.setFont;
                        var6 = {};
                        var6['size'] = var8;
                        var6 = var12.bind(var14)(var6);
                        var13 = var14.rotateAroundOriginAndDraw;
                        var12 = var3.rotation;
                        var6 = function() {
                            var4 = _closure3_slot0;
                            var3 = var4.drawText;
                            var2 = '🎉';
                            var1 = {'x': 0, 'y': 0};
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        };
                        var6 = var13.bind(var14)(var11, var12, var6);
                        var6 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var4 = 4;
                        var4 = var12[var4];
                        var10 = var6.bind(var10)(var4);
                        var6 = var10.captureMessage;
                        var14 = var3.key;
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var13 = var4.concat;
                        var12 = "Simple Confetti couldn't trigger explosion for ";
                        var4 = ".  It doesn't have an image and seemingly isn't a valid unicode emoji.";
                        var4 = var13.bind(var12)(var14, var4);
                        var4 = var6.bind(var10)(var4);
                        _fun0009_ip = 566; continue _fun0009;
 423:
                        var10 = _closure3_slot0;
                        var6 = var10.setFont;
                        var4 = {};
                        var4['size'] = var8;
                        var4 = var6.bind(var10)(var4);
                        var8 = var10.rotateAroundOriginAndDraw;
                        var6 = var3.rotation;
                        var4 = function() {
                            var4 = _closure3_slot0;
                            var3 = var4.drawText;
                            var1 = _closure4_slot0;
                            var2 = var1.key;
                            var1 = {'x': 0, 'y': 0};
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        };
                        var4 = var8.bind(var10)(var11, var6, var4);
                        _fun0009_ip = 566; continue _fun0009;
 472:
                        var4 = {};
                        var6 = 32;
                        var8 = var6 * var7;
                        var4['w'] = var8;
                        var6 = var6 * var7;
                        var4['h'] = var6;
                        var _closure4_slot1 = var4;
                        var6 = {};
                        var8 = var4.w;
                        var7 = 2;
                        var8 = var8 / var7;
                        var8 = var9 + var8;
                        var6['x'] = var8;
                        var4 = var4.h;
                        var4 = var4 / var7;
                        var4 = var5 + var4;
                        var6['y'] = var4;
                        var5 = _closure3_slot0;
                        var4 = var5.rotateAroundOriginAndDraw;
                        var3 = var3.rotation;
                        var2 = function() {
                            var6 = _closure3_slot0;
                            var5 = var6.drawImage;
                            var2 = _closure4_slot0;
                            var4 = var2.key;
                            var10 = _closure4_slot1;
                            var2 = {};
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 2;
                            var7 = var7[var1];
                            var1 = undefined;
                            var1 = var8.bind(var1)(var7);
                            var1 = var1.FillMode;
                            var1 = var1.Contain;
                            var2['fillMode'] = var1;
                            var11 = {'x': 0, 'y': 0};
                            var13 = var6;
                            var12 = var4;
                            var9 = var2;
                            var1 = var13[var5](var12, var11, var10, var9, var8);
                            return var1;
                        };
                        var2 = var4.bind(var5)(var6, var3, var2);
 566:
                        var3 = _closure3_slot0;
                        var2 = var3.setFilter;
                        var1 = {};
                        var4 = 0;
                        var1['blur'] = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
 594:
                        var1 = 0;
                        return var1;
 598:
                        var1 = 0;
                        return var1;
                    }
                };
                var _closure3_slot4 = var5;
                var1 = _closure2_slot6;
                var1 = var5 < var1;
                var2 = undefined;
                var5 = 0;
                if(!var1) { _fun0008_ip = 170; continue _fun0008 }
 151:
                var1 = var3.bind(var2)();
                var5 = var5 + 1;
                _closure3_slot4 = var5;
                var1 = _closure2_slot6;
                if(var5 < var1) { _fun0008_ip = 151; continue _fun0008 }
 170:
                var1 = undefined;
                return var1;
            }
        };
        var1['draw'] = var6;
        var5 = function emit(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var16 = arg1;
                var3 = arg2;
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.isProbablyAValidSnowflake;
                var6 = var2.bind(var4)(var16);
                var4 = _closure2_slot5;
                var5 = false;
                var14 = var4;
                if(!(var5 === var6)) { _fun0010_ip = 104; continue _fun0010 }
 58:
                var5 = global;
                var7 = var5.Math;
                var6 = var7.max;
                var10 = var5.Math;
                var9 = var10.min;
                var5 = 3;
                var8 = var4 / var5;
                var4 = 10;
                var4 = var9.bind(var10)(var8, var4);
                var14 = var6.bind(var7)(var4, var5);
 104:
                var4 = _closure2_slot7;
                var4 = var4.freeParticles;
                var5 = var4.current;
                var13 = 2;
                var4 = var14 / var13;
                if(!(!(var5 < var4))) { _fun0010_ip = 886; continue _fun0010 }
 133:
                var4 = var3.x;
                var12 = 0;
                var4 = var12 === var4;
                if(!var4) { _fun0010_ip = 156; continue _fun0010 }
 147:
                var5 = var3.y;
                var4 = var12 === var5;
 156:
                if(!var4) { _fun0010_ip = 168; continue _fun0010 }
 159:
                var5 = var3.w;
                var4 = var12 === var5;
 168:
                if(!var4) { _fun0010_ip = 176; continue _fun0010 }
 171:
                var4 = var3.h;
 176:
                var11 = {};
                var4 = _closure2_slot0;
                var6 = var4.h;
                var5 = 8;
                var5 = var6 / var5;
                var11['min'] = var5;
                var6 = var4.h;
                var5 = 3;
                var5 = var6 / var5;
                var11['max'] = var5;
                var5 = var3.y;
                var4 = var4.h;
                var7 = 0.66;
                var4 = var7 * var4;
                if(!(var5 < var4)) { _fun0010_ip = 293; continue _fun0010 }
 242:
                var4 = global;
                var6 = var4.Math;
                var5 = var6.max;
                var4 = var3.y;
                var3 = _closure2_slot0;
                var3 = var3.h;
                var3 = var7 * var3;
                var4 = var4 / var3;
                var3 = 0.2;
                var3 = var5.bind(var6)(var3, var4);
 293:
                var17 = var12 < var14;
                var10 = 1;
                var9 = 6;
                var3 = true;
                var8 = 30;
                var7 = global;
                var6 = -50;
                var5 = 50;
                var4 = 0;
                if(!var17) { _fun0010_ip = 876; continue _fun0010 }
 327:
                var23 = {};
                var19 = _closure1_slot0;
                var17 = _closure1_slot2;
                var18 = var17[var9];
                var24 = var19.bind(var1)(var18);
                var22 = var24.random;
                var18 = _closure2_slot1;
                var20 = var18.x;
                var21 = -var20;
                var20 = var18.x;
                var20 = var22.bind(var24)(var21, var20, var3);
                var23['x'] = var20;
                var21 = var18.y;
                var20 = var17[var9];
                var25 = var19.bind(var1)(var20);
                var24 = var25.random;
                var20 = var11.min;
                var22 = -var20;
                var20 = var11.max;
                var20 = var24.bind(var25)(var22, var20, var3);
                var20 = var21 + var20;
                var23['y'] = var20;
                var20 = var17[var9];
                var21 = var19.bind(var1)(var20);
                var20 = var21.random;
                var22 = var20.bind(var21)(var12, var8);
                var24 = var7.Math;
                var21 = var24.atan2;
                var20 = var18.y;
                var25 = -var20;
                var20 = var17[var9];
                var28 = var19.bind(var1)(var20);
                var27 = var28.random;
                var20 = var11.min;
                var26 = -var20;
                var20 = var11.max;
                var20 = var27.bind(var28)(var26, var20, var3);
                var20 = var25 - var20;
                var25 = var17[var9];
                var27 = var19.bind(var1)(var25);
                var26 = var27.random;
                var25 = var18.x;
                var25 = -var25;
                var18 = var18.x;
                var18 = var26.bind(var27)(var25, var18, var3);
                var20 = var21.bind(var24)(var20, var18);
                var18 = var17[var9];
                var21 = var19.bind(var1)(var18);
                var18 = var21.random;
                var18 = var18.bind(var21)(var6, var5);
                var21 = var20 * var18;
                var24 = {};
                var18 = _closure2_slot0;
                var20 = var18.w;
                var25 = var20 / var13;
                var20 = var17[var9];
                var26 = var19.bind(var1)(var20);
                var20 = var26.random;
                var20 = var20.bind(var26)(var6, var5);
                var20 = var25 + var20;
                var24['x'] = var20;
                var20 = var18.h;
                var18 = _closure2_slot4;
                var18 = var20 - var18;
                var17 = var17[var9];
                var19 = var19.bind(var1)(var17);
                var17 = var19.random;
                var17 = var17.bind(var19)(var6, var5);
                var17 = var18 + var17;
                var24['y'] = var17;
                var17 = _closure2_slot6;
                var17 = var12 < var17;
                var18 = 0;
                if(!var17) { _fun0010_ip = 853; continue _fun0010 }
 676:
                var17 = _closure2_slot7;
                var17 = var17.particleStates;
                var17 = var17.current;
                var19 = var17[var18];
                var17 = _closure1_slot5;
                var17 = var17.FREE;
                var20 = var18;
                if(!(var19 !== var17)) { _fun0010_ip = 729; continue _fun0010 }
 712:
                var18 = var20 + var10;
                var17 = _closure2_slot6;
                if(var18 < var17) { _fun0010_ip = 676; continue _fun0010 }
 724:
                _fun0010_ip = 853; continue _fun0010;
 729:
                var17 = _closure2_slot7;
                var18 = var17.particles;
                var19 = var18.current;
                var18 = {};
                var18['key'] = var16;
                var18['position'] = var24;
                var18['velocity'] = var23;
                var23 = _closure1_slot6;
                var23 = var23.bind(var1)();
                var18['scale'] = var23;
                var18['rotation'] = var22;
                var18['angularVelocity'] = var21;
                var19[var20] = var18;
                var18 = var17.particleStates;
                var19 = var18.current;
                var18 = _closure1_slot5;
                var18 = var18.ACTIVE;
                var19[var20] = var18;
                var19 = var17.freeParticles;
                var18 = var19.current;
                var18 = var18 - var10;
                var19['current'] = var18;
                var18 = var17.activeParticles;
                var17 = var18.current;
                var17 = var17 + var10;
                var18['current'] = var17;
 853:
                var18 = _closure1_slot8;
                var17 = _closure2_slot7;
                var17 = var18.bind(var1)(var17);
                var4 = var4 + 1;
                if(var4 < var14) { _fun0010_ip = 327; continue _fun0010 }
 876:
                var2 = _closure2_slot8;
                var2['current'] = var3;
 886:
                return var1;
            }
        };
        var1['emit'] = var5;
        var1['tickRate'] = var4;
        var1['improvePerformance'] = var3;
        var1['shouldTick'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
// app/modules/remixing/native/components/CanvasComponents.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = 'function CanvasComponentsTsx1(){const{activeId}=this.__closure;return activeId.get();}';
    var4['code'] = var7;
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 'function CanvasComponentsTsx2(current,previous){const{runOnJS,setId}=this.__closure;if(current!==previous){runOnJS(setId)(current);}}';
    var4['code'] = var7;
    var _closure1_slot8 = var4;
    var4 = function getShaderUniforms(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = {};
            var2 = var5.size;
            var4 = null;
            var6 = var4 == var2;
            var7 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var2.width;
case 2:
            var8 = var4 != var7;
            var2 = 100;
            var6 = var2;
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var7;
case 4:
            var1['w'] = var6;
            var5 = var5.size;
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var5.height;
case 6:
            var4 = var4 != var3;
            if(!var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var3;
case 8:
            var1['h'] = var2;
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var4 = function renderRemixingComponent(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = var2.type;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 6;
            var1 = var1[var5];
            var6 = undefined;
            var1 = var4.bind(var6)(var1);
            var1 = var1.RemixElement;
            var1 = var1.RECTANGLE;
            if(!(var1 !== var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var4.bind(var6)(var1);
            var1 = var1.RemixElement;
            var1 = var1.BACKDROP;
            if(!(var1 !== var3)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var4.bind(var6)(var1);
            var1 = var1.RemixElement;
            var1 = var1.IMAGE;
            if(!(var1 !== var3)) { _fun0002_ip = 12; continue _fun0002 }
case 14:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var4.bind(var6)(var1);
            var1 = var1.RemixElement;
            var1 = var1.SVG;
            if(!(var1 !== var3)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var4.bind(var6)(var1);
            var1 = var1.RemixElement;
            var1 = var1.TEXT;
            if(!(var1 !== var3)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var4.bind(var6)(var1);
            var1 = var1.RemixElement;
            var1 = var1.DRAWING;
            if(!(var1 !== var3)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var4.bind(var6)(var1);
            var1 = var1.RemixElement;
            var1 = var1.MENTION_GLOBAL;
            if(!(var1 !== var3)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var4.bind(var6)(var1);
            var1 = var1.RemixElement;
            var1 = var1.MENTION_ROLE;
            if(!(var1 !== var3)) { _fun0002_ip = 21; continue _fun0002 }
case 23:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var4.bind(var6)(var1);
            var1 = var1.RemixElement;
            var1 = var1.MENTION_USER;
            var10 = null;
            if(!(var1 === var3)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 13;
            var1 = var4[var1];
            var10 = var3.bind(var6)(var1);
            _fun0002_ip = 24; continue _fun0002;
case 21:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 12;
            var1 = var4[var1];
            var10 = var3.bind(var6)(var1);
            _fun0002_ip = 24; continue _fun0002;
case 19:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 11;
            var1 = var4[var1];
            var10 = var3.bind(var6)(var1);
            _fun0002_ip = 24; continue _fun0002;
case 17:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var10 = var3.bind(var6)(var1);
            _fun0002_ip = 24; continue _fun0002;
case 15:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 9;
            var1 = var4[var1];
            var10 = var3.bind(var6)(var1);
            _fun0002_ip = 24; continue _fun0002;
case 12:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 8;
            var1 = var4[var1];
            var10 = var3.bind(var6)(var1);
            _fun0002_ip = 24; continue _fun0002;
case 10:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 7;
            var1 = var4[var1];
            var10 = var3.bind(var6)(var1);
case 24:
            var1 = var2.shader;
            var7 = null;
            var1 = var7 != var1;
            var13 = null;
            if(!var1) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 14;
            var1 = var4[var1];
            var3 = var3.bind(var6)(var1);
            var1 = var2.shader;
            var13 = var3[var1];
case 26:
            var3 = var7 == var10;
            var1 = null;
            if(var3) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var5 = _closure1_slot6;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var14 = 4;
            var3 = var3[var14];
            var3 = var4.bind(var6)(var3);
            var4 = var3.Group;
            var3 = {};
            var9 = var7 != var13;
            if(!var9) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var12 = _closure1_slot5;
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var14];
            var7 = var11.bind(var6)(var7);
            var11 = var7.Shader;
            var7 = {};
            var7['source'] = var13;
            var13 = _closure1_slot9;
            var13 = var13.bind(var6)(var2);
            var7['uniforms'] = var13;
            var9 = var12.bind(var6)(var11, var7);
case 30:
            var7 = new Array(2);
            var7[0] = var9;
            var9 = _closure1_slot5;
            var8 = {};
            var17 = var8;
            var16 = var2;
            var11 = copyDataProperties(var17, var16);
            var12 = var2.id;
            var11 = arg2;
            var12 = var11 === var12;
            var11 = 'active';
            var8[var11] = var12;
            var12 = arg3;
            var11 = 'transformMap';
            var8[var11] = var12;
            var8 = var9.bind(var6)(var10, var8);
            var7[1] = var8;
            var3['children'] = var7;
            var2 = var2.id;
            var1 = var5.bind(var6)(var4, var3, var2);
case 28:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/components/CanvasComponents.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var12 = var1.components;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0003_ip = 3; continue _fun0003 }
case 32:
            var12 = new Array(0);
case 3:
            var13 = var1.activeId;
            var _closure2_slot0 = var13;
            var1 = var1.transformMap;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var2 = _closure1_slot4;
            var1 = var2.useState;
            var11 = '';
            var3 = var1.bind(var2)(var11);
            var2 = _closure1_slot3;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var10 = var2[var1];
            _closure2_slot2 = var10;
            var1 = 1;
            var14 = var2[var1];
            _closure2_slot3 = var14;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var15 = 3;
            var1 = var7[var15];
            var9 = var2.bind(var4)(var1);
            var8 = var9.useAnimatedReaction;
            var3 = function x() {
                var2 = _closure2_slot0;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = {};
            var1['activeId'] = var13;
            var3['__closure'] = var1;
            var1 = 11760059841004.0;
            var3['__workletHash'] = var1;
            var1 = _closure1_slot7;
            var3['__initData'] = var1;
            var1 = function E(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot3;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 33:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = {};
            var15 = var7[var15];
            var15 = var2.bind(var4)(var15);
            var15 = var15.runOnJS;
            var13['runOnJS'] = var15;
            var13['setId'] = var14;
            var1['__closure'] = var13;
            var13 = 10556140909180.0;
            var1['__workletHash'] = var13;
            var13 = _closure1_slot8;
            var1['__initData'] = var13;
            var1 = var8.bind(var9)(var3, var1);
            var3 = _closure1_slot6;
            var1 = 4;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Group;
            var1 = {};
            var9 = null;
            var8 = var9 == var12;
            var7 = undefined;
            if(var8) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var8 = var12.map;
            var5 = function(arg1) {
                var5 = _closure1_slot10;
                var4 = _closure2_slot2;
                var3 = _closure2_slot1;
                var2 = undefined;
                var1 = arg1;
                var1 = var5.bind(var2)(var1, var4, var3);
                return var1;
            };
            var7 = var8.bind(var12)(var5);
case 35:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 5;
            var6 = var12[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var9 = var9 != var10;
            if(!var9) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var9 = var11 !== var10;
case 37:
            var6['gesturing'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
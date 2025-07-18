// app/modules/in_app_reports/native/components/InAppReportsTextElement.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native4;
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
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var10 = 16;
    var9 = {'marginBottom': 16, 'paddingHorizontal': 16};
    var4['container'] = var9;
    var9 = {};
    var11 = 8;
    var9['marginBottom'] = var11;
    var4['header'] = var9;
    var9 = {};
    var9['marginBottom'] = var10;
    var4['body'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_reports/native/components/InAppReportsTextElement.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function TextElement(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.element;
            var1 = var1.data;
            var16 = var1.header;
            var14 = var1.body;
            var2 = var1.is_localized;
            var1 = _closure1_slot7;
            var6 = undefined;
            var12 = var1.bind(var6)();
            var4 = _closure1_slot3;
            var3 = var4.useRef;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var5 = var5.bind(var6)(var1);
            var1 = var5.getParser;
            var1 = var1.bind(var5)();
            var13 = var3.bind(var4)(var1);
            var8 = null;
            var1 = null;
            if(!var2) { _fun0001_ip = 303; continue _fun0001 }
 97:
            if(!(var8 == var16)) { _fun0001_ip = 113; continue _fun0001 }
 101:
            var3 = var8 == var14;
            var2 = null;
            if(var3) { _fun0001_ip = 300; continue _fun0001 }
 113:
            var5 = _closure1_slot6;
            var4 = _closure1_slot4;
            var3 = {};
            var7 = var12.container;
            var3['style'] = var7;
            var10 = var8 != var16;
            if(!var10) { _fun0001_ip = 203; continue _fun0001 }
 139:
            var15 = _closure1_slot5;
            var11 = _closure1_slot0;
            var17 = _closure1_slot2;
            var7 = 5;
            var7 = var17[var7];
            var7 = var11.bind(var6)(var7);
            var11 = var7.Text;
            var7 = {'style': null, 'variant': 'heading-md/extrabold', 'color': 'header-primary'};
            var17 = var12.header;
            var7['style'] = var17;
            var7['children'] = var16;
            var10 = var15.bind(var6)(var11, var7);
 203:
            var7 = new Array(2);
            var7[0] = var10;
            var8 = var8 != var14;
            if(!var8) { _fun0001_ip = 286; continue _fun0001 }
 218:
            var11 = _closure1_slot5;
            var10 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 5;
            var9 = var15[var9];
            var9 = var10.bind(var6)(var9);
            var10 = var9.Text;
            var9 = {};
            var12 = var12.body;
            var9['style'] = var12;
            var12 = 'text-md/medium';
            var9['variant'] = var12;
            var12 = var13.current;
            var12 = var12.bind(var13)(var14);
            var9['children'] = var12;
            var8 = var11.bind(var6)(var10, var9);
 286:
            var7[1] = var8;
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 300:
            var1 = var2;
 303:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
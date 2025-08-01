// app/modules/directory_channels/native/components/GuildDirectoryCreateOrAddDescription.tsx
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
    var10 = 1;
    var7 = var6[var10];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['container'] = var9;
    var10 = 'center';
    var9 = {'marginBottom': 8, 'textAlign': 'center'};
    var4['title'] = var9;
    var9 = {};
    var9['textAlign'] = var10;
    var4['description'] = var9;
    var9 = {'alignItems': 'center', 'justifyContent': 'center', 'padding': 16};
    var4['header'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/directory_channels/native/components/GuildDirectoryCreateOrAddDescription.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildDirectoryCreateOrAddDescription(arg1) {
        var2 = arg1;
        var11 = var2.directoryChannelId;
        var _closure2_slot0 = var11;
        var3 = var2.directoryGuildName;
        var _closure2_slot1 = var3;
        var3 = var2.guild;
        var _closure2_slot2 = var3;
        var2 = var2.createGuild;
        var _closure2_slot3 = var2;
        var2 = _closure1_slot8;
        var4 = undefined;
        var19 = var2.bind(var4)();
        var1 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1, arg2) {
                var1 = function* anon_0_(arg1, arg2) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0001_ip = 276; continue _fun0001 }
 10:
                        var2 = _closure2_slot3;
                        var4 = null;
                        if(!(var4 != var2)) { _fun0001_ip = 136; continue _fun0001 }
 23:
                        var2 = _closure2_slot3;
                        var10 = var2.name;
                        var9 = var2.icon;
                        var8 = var2.template;
                        if(!(var4 != var8)) { _fun0001_ip = 271; continue _fun0001 }
 50:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 5;
                        var2 = var6[var2];
                        var6 = undefined;
                        var5 = var5.bind(var6)(var2);
                        var2 = var5.createGuildFromTemplate;
                        var2 = var2.bind(var5)(var10, var9, var8);
                        SaveGenerator(address=92);
 90:
                        return var2;
 92:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0001_ip = 268; continue _fun0001 }
 101:
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 6;
                        var3 = var8[var3];
                        var5 = var5.bind(var6)(var3);
                        var3 = var5.fromGuild;
                        var3 = var3.bind(var5)(var2);
                        _closure2_slot2 = var3;
 136:
                        var3 = _closure2_slot2;
                        if(!(var4 != var3)) { _fun0001_ip = 260; continue _fun0001 }
 144:
                        var4 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var3 = 7;
                        var3 = var9[var3];
                        var8 = undefined;
                        var5 = var4.bind(var8)(var3);
                        var4 = var5.onAddDirectoryGuildEntry;
                        var3 = {};
                        var10 = _closure2_slot0;
                        var3['directoryChannelId'] = var10;
                        var10 = _closure2_slot1;
                        var3['directoryGuildName'] = var10;
                        var7 = _closure2_slot2;
                        var3['guild'] = var7;
                        var7 = arg1;
                        var3['description'] = var7;
                        var7 = arg2;
                        var3['category'] = var7;
                        var7 = _closure1_slot1;
                        var6 = 8;
                        var6 = var9[var6];
                        var6 = var7.bind(var8)(var6);
                        var6 = var6.close;
                        var3['onClose'] = var6;
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address=254);
 252:
                        return var3;
 254:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0001_ip = 265; continue _fun0001 }
 260:
                        var4 = undefined;
                        return var4;
 265:
                        return var3;
 268:
                        return var2;
 271:
                        var2 = undefined;
                        return var2;
 276:
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
        var13 = var1.bind(var4)();
        var3 = _closure1_slot6;
        var15 = _closure1_slot0;
        var16 = _closure1_slot2;
        var1 = 9;
        var1 = var16[var1];
        var1 = var15.bind(var4)(var1);
        var2 = var1.GuildDirectoryAddModalScreen;
        var1 = {};
        var7 = _closure1_slot7;
        var6 = _closure1_slot5;
        var5 = {};
        var8 = var19.container;
        var5['style'] = var8;
        var8 = 'handled';
        var5['keyboardShouldPersistTaps'] = var8;
        var10 = _closure1_slot4;
        var8 = {};
        var12 = var19.header;
        var8['style'] = var12;
        var17 = 10;
        var12 = var16[var17];
        var12 = var15.bind(var4)(var12);
        var18 = var12.Text;
        var14 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
        var12 = var19.title;
        var14['style'] = var12;
        var12 = 11;
        var20 = var16[var12];
        var20 = var15.bind(var4)(var20);
        var22 = var20.intl;
        var21 = var22.string;
        var20 = var16[var12];
        var20 = var15.bind(var4)(var20);
        var20 = var20.t;
        var20 = var20.5bQcoa;
        var20 = var21.bind(var22)(var20);
        var14['children'] = var20;
        var18 = var3.bind(var4)(var18, var14);
        var14 = new Array(2);
        var14[0] = var18;
        var17 = var16[var17];
        var17 = var15.bind(var4)(var17);
        var18 = var17.Text;
        var17 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
        var19 = var19.description;
        var17['style'] = var19;
        var19 = var16[var12];
        var19 = var15.bind(var4)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var16[var12];
        var19 = var15.bind(var4)(var19);
        var19 = var19.t;
        var19 = var19.Ie60WV;
        var19 = var20.bind(var21)(var19);
        var17['children'] = var19;
        var17 = var3.bind(var4)(var18, var17);
        var14[1] = var17;
        var8['children'] = var14;
        var10 = var7.bind(var4)(var10, var8);
        var8 = new Array(2);
        var8[0] = var10;
        var10 = _closure1_slot1;
        var9 = 12;
        var9 = var16[var9];
        var10 = var10.bind(var4)(var9);
        var9 = {};
        var9['onSubmit'] = var13;
        var13 = var16[var12];
        var13 = var15.bind(var4)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var16[var12];
        var12 = var15.bind(var4)(var12);
        var12 = var12.t;
        var12 = var12.H9jxS0;
        var12 = var13.bind(var14)(var12);
        var9['buttonLabel'] = var12;
        var9['directoryChannelId'] = var11;
        var9 = var3.bind(var4)(var10, var9);
        var8[1] = var9;
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
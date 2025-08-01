// app/modules/guild_member_verification/native/components/ChatBeginningRowJoinApplication.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var11 = 4;
    var4 = var6[var11];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {'width': '100%', 'marginTop': 12, 'display': 'flex', 'flexDirection': 'column', 'alignSelf': 'flex-start', 'padding': 16, 'backgroundColor': null, 'borderColor': null, 'borderWidth': 1};
    var4 = 12;
    var12 = 5;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SECONDARY;
    var10['backgroundColor'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var10['borderColor'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var10['borderRadius'] = var14;
    var7['container'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    var7['guildInfoRow'] = var10;
    var10 = {'backgroundColor': null, 'height': 1, 'border': 'none', 'marginVertical': 16};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var10['backgroundColor'] = var12;
    var7['divider'] = var10;
    var10 = {};
    var10['marginBottom'] = var11;
    var7['formQuestion'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot7 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/native/components/ChatBeginningRowJoinApplication.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.channelId;
            var1 = _closure1_slot7;
            var5 = undefined;
            var14 = var1.bind(var5)();
            var _closure2_slot0 = var14;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.bind(var5)(var2);
            var8 = var1.joinRequest;
            var _closure2_slot1 = var8;
            var19 = var1.joinRequestGuild;
            var2 = _closure1_slot0;
            var1 = 7;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStores;
            var1 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getUser;
                    var5 = _closure2_slot1;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 40; continue _fun0002 }
 31:
                    var4 = _closure2_slot1;
                    var1 = var4.userId;
 40:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var17 = var3.bind(var4)(var2, var1);
            var9 = null;
            var2 = var9 == var8;
            var1 = null;
            if(var2) { _fun0001_ip = 516; continue _fun0001 }
 128:
            var2 = var8.formResponses;
            var2 = var9 == var2;
            var1 = null;
            if(var2) { _fun0001_ip = 516; continue _fun0001 }
 146:
            var4 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var14.container;
            var2['style'] = var6;
            var11 = var9 != var19;
            if(!var11) { _fun0001_ip = 328; continue _fun0001 }
 175:
            var13 = _closure1_slot6;
            var12 = _closure1_slot3;
            var6 = {};
            var14 = var14.guildInfoRow;
            var6['style'] = var14;
            var18 = _closure1_slot5;
            var15 = _closure1_slot1;
            var20 = _closure1_slot2;
            var21 = 8;
            var14 = var20[var21];
            var15 = var15.bind(var5)(var14);
            var14 = {};
            var14['guild'] = var19;
            var16 = _closure1_slot0;
            var21 = var20[var21];
            var21 = var16.bind(var5)(var21);
            var21 = var21.GuildIconSizes;
            var21 = var21.XXSMALL;
            var14['size'] = var21;
            var15 = var18.bind(var5)(var15, var14);
            var14 = new Array(2);
            var14[0] = var15;
            var15 = 9;
            var15 = var20[var15];
            var15 = var16.bind(var5)(var15);
            var16 = var15.Text;
            var15 = {'variant': 'heading-sm/semibold', 'color': 'header-primary'};
            var19 = var19.name;
            var15['children'] = var19;
            var15 = var18.bind(var5)(var16, var15);
            var14[1] = var15;
            var6['children'] = var14;
            var11 = var13.bind(var5)(var12, var6);
 328:
            var6 = new Array(3);
            var6[0] = var11;
            var9 = var9 != var17;
            if(!var9) { _fun0001_ip = 458; continue _fun0001 }
 343:
            var12 = _closure1_slot5;
            var14 = _closure1_slot0;
            var18 = _closure1_slot2;
            var10 = 9;
            var10 = var18[var10];
            var10 = var14.bind(var5)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'heading-xl/semibold', 'color': 'header-primary'};
            var13 = 10;
            var15 = var18[var13];
            var15 = var14.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.format;
            var13 = var18[var13];
            var13 = var14.bind(var5)(var13);
            var13 = var13.t;
            var14 = var13.jDV3i4;
            var13 = {};
            var17 = var17.globalName;
            var13['username'] = var17;
            var13 = var15.bind(var16)(var14, var13);
            var10['children'] = var13;
            var9 = var12.bind(var5)(var11, var10);
 458:
            var6[1] = var9;
            var10 = var8.formResponses;
            var9 = var10.filter;
            var8 = function(arg1) {
                var1 = arg1;
                var2 = var1.field_type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 11;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.VerificationFormFieldTypes;
                var1 = var1.TERMS;
                var1 = var2 !== var1;
                return var1;
            };
            var9 = var9.bind(var10)(var8);
            var8 = var9.map;
            var7 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var13 = arg1;
                    var2 = var13.field_type;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 11;
                    var1 = var4[var1];
                    var5 = undefined;
                    var1 = var3.bind(var5)(var1);
                    var1 = var1.VerificationFormFieldTypes;
                    var1 = var1.MULTIPLE_CHOICE;
                    if(!(var2 === var1)) { _fun0003_ip = 62; continue _fun0003 }
 50:
                    var2 = var13.response;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0003_ip = 70; continue _fun0003 }
 62:
                    var9 = var13.response;
                    _fun0003_ip = 86; continue _fun0003;
 70:
                    var2 = var13.choices;
                    var1 = var13.response;
                    var9 = var2[var1];
 86:
                    var4 = _closure1_slot6;
                    var3 = _closure1_slot3;
                    var2 = {};
                    var8 = _closure1_slot5;
                    var1 = {};
                    var14 = _closure2_slot0;
                    var7 = var14.divider;
                    var1['style'] = var7;
                    var7 = var8.bind(var5)(var3, var1);
                    var1 = new Array(3);
                    var1[0] = var7;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 9;
                    var11 = var10[var6];
                    var11 = var7.bind(var5)(var11);
                    var12 = var11.Text;
                    var11 = {'style': null, 'variant': 'text-xs/semibold', 'color': 'text-muted'};
                    var14 = var14.formQuestion;
                    var11['style'] = var14;
                    var13 = var13.label;
                    var11['children'] = var13;
                    var11 = var8.bind(var5)(var12, var11);
                    var1[1] = var11;
                    var6 = var10[var6];
                    var6 = var7.bind(var5)(var6);
                    var7 = var6.Text;
                    var6 = {'variant': 'text-md/medium', 'color': 'text-primary'};
                    var6['children'] = var9;
                    var6 = var8.bind(var5)(var7, var6);
                    var1[2] = var6;
                    var2['children'] = var1;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var6 = 'form-response-';
                    var1 = arg2;
                    var1 = var7.bind(var6)(var1);
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var7 = var8.bind(var9)(var7);
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 516:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
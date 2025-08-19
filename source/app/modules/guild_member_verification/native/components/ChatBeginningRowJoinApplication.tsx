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
    var7 = var4.jsxs;
    var _closure1_slot6 = var7;
    var4 = var4.Fragment;
    var _closure1_slot7 = var4;
    var11 = 4;
    var4 = var6[var11];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {'width': '100%', 'marginTop': 12, 'display': 'flex', 'flexDirection': 'column', 'alignSelf': 'flex-start', 'padding': 16, 'backgroundColor': null, 'borderColor': null, 'borderWidth': 1};
    var4 = 16;
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
    var14 = var14.lg;
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
    var _closure1_slot8 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/native/components/ChatBeginningRowJoinApplication.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.channelId;
            var1 = _closure1_slot8;
            var5 = undefined;
            var19 = var1.bind(var5)();
            var _closure2_slot0 = var19;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)(var6);
            var8 = var1.joinRequest;
            var _closure2_slot1 = var8;
            var24 = var1.joinRequestGuild;
            var4 = _closure1_slot0;
            var1 = 7;
            var1 = var3[var1];
            var10 = var4.bind(var5)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var1;
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
            var23 = var9.bind(var10)(var7, var1);
            var1 = 8;
            var1 = var3[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.useJoinRequestButtonActions;
            var1 = var1.bind(var4)(var8, var6);
            var15 = var1.approveRequest;
            var16 = var1.rejectRequest;
            var1 = 9;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.useExperiment;
            var2 = {};
            var13 = null;
            var1 = var13 == var24;
            var6 = undefined;
            if(var1) { _fun0001_ip = 186; continue _fun0001 }
 181:
            var6 = var24.id;
 186:
            var7 = var13 != var6;
            var1 = '0';
            if(!var7) { _fun0001_ip = 202; continue _fun0001 }
 199:
            var1 = var6;
 202:
            var2['guildId'] = var1;
            var1 = 'ChatBeginningRowJoinApplication';
            var2['location'] = var1;
            var1 = {};
            var6 = false;
            var1['autoTrackExposure'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            var7 = var1.enabled;
            var2 = var13 == var8;
            var1 = null;
            if(var2) { _fun0001_ip = 961; continue _fun0001 }
 248:
            var2 = var8.formResponses;
            var2 = var13 == var2;
            var1 = null;
            if(var2) { _fun0001_ip = 961; continue _fun0001 }
 266:
            var4 = _closure1_slot6;
            var3 = _closure1_slot7;
            var2 = {};
            var9 = _closure1_slot3;
            var6 = {};
            var10 = var19.container;
            var6['style'] = var10;
            var14 = var13 != var24;
            if(!var14) { _fun0001_ip = 454; continue _fun0001 }
 301:
            var18 = _closure1_slot6;
            var17 = _closure1_slot3;
            var10 = {};
            var19 = var19.guildInfoRow;
            var10['style'] = var19;
            var22 = _closure1_slot5;
            var20 = _closure1_slot1;
            var25 = _closure1_slot2;
            var26 = 10;
            var19 = var25[var26];
            var20 = var20.bind(var5)(var19);
            var19 = {};
            var19['guild'] = var24;
            var21 = _closure1_slot0;
            var26 = var25[var26];
            var26 = var21.bind(var5)(var26);
            var26 = var26.GuildIconSizes;
            var26 = var26.XXSMALL;
            var19['size'] = var26;
            var20 = var22.bind(var5)(var20, var19);
            var19 = new Array(2);
            var19[0] = var20;
            var20 = 11;
            var20 = var25[var20];
            var20 = var21.bind(var5)(var20);
            var21 = var20.Text;
            var20 = {'variant': 'heading-sm/semibold', 'color': 'header-primary'};
            var24 = var24.name;
            var20['children'] = var24;
            var20 = var22.bind(var5)(var21, var20);
            var19[1] = var20;
            var10['children'] = var19;
            var14 = var18.bind(var5)(var17, var10);
 454:
            var10 = new Array(3);
            var10[0] = var14;
            var13 = var13 != var23;
            if(!var13) { _fun0001_ip = 580; continue _fun0001 }
 469:
            var18 = _closure1_slot5;
            var20 = _closure1_slot0;
            var24 = _closure1_slot2;
            var14 = 11;
            var14 = var24[var14];
            var14 = var20.bind(var5)(var14);
            var17 = var14.Text;
            var14 = {'variant': 'heading-xl/semibold', 'color': 'header-primary'};
            var19 = 12;
            var21 = var24[var19];
            var21 = var20.bind(var5)(var21);
            var22 = var21.intl;
            var21 = var22.format;
            var19 = var24[var19];
            var19 = var20.bind(var5)(var19);
            var19 = var19.t;
            var20 = var19.jDV3i4;
            var19 = {};
            var23 = var23.globalName;
            var19['username'] = var23;
            var19 = var21.bind(var22)(var20, var19);
            var14['children'] = var19;
            var13 = var18.bind(var5)(var17, var14);
 580:
            var10[1] = var13;
            var17 = var8.formResponses;
            var14 = var17.filter;
            var13 = function(arg1) {
                var1 = arg1;
                var2 = var1.field_type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 13;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.VerificationFormFieldTypes;
                var1 = var1.TERMS;
                var1 = var2 !== var1;
                return var1;
            };
            var14 = var14.bind(var17)(var13);
            var13 = var14.map;
            var12 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var13 = arg1;
                    var2 = var13.field_type;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 13;
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
                    var6 = 11;
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
            var12 = var13.bind(var14)(var12);
            var10[2] = var12;
            var6['children'] = var10;
            var9 = var4.bind(var5)(var9, var6);
            var6 = new Array(2);
            var6[0] = var9;
            if(!var7) { _fun0001_ip = 691; continue _fun0001 }
 649:
            var9 = var8.applicationStatus;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 13;
            var8 = var12[var8];
            var8 = var10.bind(var5)(var8);
            var8 = var8.GuildJoinRequestApplicationStatuses;
            var8 = var8.SUBMITTED;
            var7 = var9 === var8;
 691:
            if(!var7) { _fun0001_ip = 947; continue _fun0001 }
 697:
            var10 = _closure1_slot6;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var8 = 14;
            var8 = var19[var8];
            var8 = var18.bind(var5)(var8);
            var9 = var8.ButtonGroup;
            var8 = {'direction': 'horizontal', 'align': 'center'};
            var14 = _closure1_slot5;
            var12 = 15;
            var11 = var19[var12];
            var11 = var18.bind(var5)(var11);
            var13 = var11.Button;
            var11 = {'grow': true, 'size': 'md', 'variant': 'primary'};
            var11['onPress'] = var15;
            var15 = 12;
            var17 = var19[var15];
            var17 = var18.bind(var5)(var17);
            var21 = var17.intl;
            var20 = var21.string;
            var17 = var19[var15];
            var17 = var18.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17.BzjDQE;
            var17 = var20.bind(var21)(var17);
            var11['text'] = var17;
            var13 = var14.bind(var5)(var13, var11);
            var11 = new Array(2);
            var11[0] = var13;
            var12 = var19[var12];
            var12 = var18.bind(var5)(var12);
            var13 = var12.Button;
            var12 = {'grow': true, 'size': 'md', 'variant': 'destructive'};
            var12['onPress'] = var16;
            var16 = var19[var15];
            var16 = var18.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.hDtbs7;
            var15 = var16.bind(var17)(var15);
            var12['text'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var11[1] = var12;
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 947:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 961:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
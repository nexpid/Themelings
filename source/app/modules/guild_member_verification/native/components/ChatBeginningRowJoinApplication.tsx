// app/modules/guild_member_verification/native/components/ChatBeginningRowJoinApplication.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var10 = 4;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var7 = var4.jsxs;
    var _closure1_slot8 = var7;
    var4 = var4.Fragment;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'width': '100%', 'marginTop': 12, 'display': 'flex', 'flexDirection': 'column', 'alignSelf': 'flex-start', 'padding': 16, 'backgroundColor': null, 'borderColor': null, 'borderWidth': 1};
    var11 = 7;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var9['borderColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var9['borderRadius'] = var13;
    var4['container'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    var4['guildInfoRow'] = var9;
    var9 = {'backgroundColor': null, 'height': 1, 'border': 'none', 'marginVertical': 16};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var9['backgroundColor'] = var11;
    var4['divider'] = var9;
    var9 = {};
    var9['marginBottom'] = var10;
    var4['formQuestion'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/native/components/ChatBeginningRowJoinApplication.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.channelId;
            var1 = _closure1_slot10;
            var5 = undefined;
            var20 = var1.bind(var5)();
            var _closure2_slot0 = var20;
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 8;
            var1 = var4[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)(var7);
            var8 = var1.joinRequest;
            var _closure2_slot1 = var8;
            var25 = var1.joinRequestGuild;
            var _closure2_slot2 = var25;
            var6 = _closure1_slot0;
            var3 = 9;
            var1 = var4[var3];
            var12 = var6.bind(var5)(var1);
            var10 = var12.useStateFromStores;
            var1 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot5;
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
            var24 = var10.bind(var12)(var9, var1);
            var1 = 10;
            var1 = var4[var1];
            var6 = var6.bind(var5)(var1);
            var1 = var6.useJoinRequestButtonActions;
            var1 = var1.bind(var6)(var8, var7);
            var15 = var1.approveRequest;
            var16 = var1.rejectRequest;
            var1 = 11;
            var1 = var4[var1];
            var6 = var2.bind(var5)(var1);
            var4 = var6.useExperiment;
            var2 = {};
            var14 = null;
            var1 = var14 == var25;
            var7 = undefined;
            if(var1) { _fun0001_ip = 190; continue _fun0001 }
 185:
            var7 = var25.id;
 190:
            var9 = var14 != var7;
            var1 = '0';
            if(!var9) { _fun0001_ip = 206; continue _fun0001 }
 203:
            var1 = var7;
 206:
            var2['guildId'] = var1;
            var1 = 'ChatBeginningRowJoinApplication';
            var2['location'] = var1;
            var1 = {};
            var7 = false;
            var1['autoTrackExposure'] = var7;
            var1 = var4.bind(var6)(var2, var1);
            var7 = var1.enabled;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStores;
            var1 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var4 = _closure1_slot4;
                var3 = var4.can;
                var1 = _closure1_slot6;
                var2 = var1.KICK_MEMBERS;
                var1 = _closure2_slot2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var9 = var3.bind(var4)(var2, var1);
            var2 = var14 == var8;
            var1 = null;
            if(var2) { _fun0001_ip = 1022; continue _fun0001 }
 299:
            var2 = var8.formResponses;
            var2 = var14 == var2;
            var1 = null;
            if(var2) { _fun0001_ip = 1022; continue _fun0001 }
 317:
            var4 = _closure1_slot8;
            var3 = _closure1_slot9;
            var2 = {};
            var10 = _closure1_slot3;
            var6 = {};
            var12 = var20.container;
            var6['style'] = var12;
            var17 = var14 != var25;
            if(!var17) { _fun0001_ip = 505; continue _fun0001 }
 352:
            var19 = _closure1_slot8;
            var18 = _closure1_slot3;
            var12 = {};
            var20 = var20.guildInfoRow;
            var12['style'] = var20;
            var23 = _closure1_slot7;
            var21 = _closure1_slot1;
            var26 = _closure1_slot2;
            var27 = 12;
            var20 = var26[var27];
            var21 = var21.bind(var5)(var20);
            var20 = {};
            var20['guild'] = var25;
            var22 = _closure1_slot0;
            var27 = var26[var27];
            var27 = var22.bind(var5)(var27);
            var27 = var27.GuildIconSizes;
            var27 = var27.XXSMALL;
            var20['size'] = var27;
            var21 = var23.bind(var5)(var21, var20);
            var20 = new Array(2);
            var20[0] = var21;
            var21 = 13;
            var21 = var26[var21];
            var21 = var22.bind(var5)(var21);
            var22 = var21.Text;
            var21 = {'variant': 'heading-sm/semibold', 'color': 'header-primary'};
            var25 = var25.name;
            var21['children'] = var25;
            var21 = var23.bind(var5)(var22, var21);
            var20[1] = var21;
            var12['children'] = var20;
            var17 = var19.bind(var5)(var18, var12);
 505:
            var12 = new Array(3);
            var12[0] = var17;
            var14 = var14 != var24;
            if(!var14) { _fun0001_ip = 635; continue _fun0001 }
 520:
            var19 = _closure1_slot7;
            var21 = _closure1_slot0;
            var25 = _closure1_slot2;
            var17 = 13;
            var17 = var25[var17];
            var17 = var21.bind(var5)(var17);
            var18 = var17.Text;
            var17 = {'variant': 'heading-xl/semibold', 'color': 'header-primary'};
            var20 = 14;
            var22 = var25[var20];
            var22 = var21.bind(var5)(var22);
            var23 = var22.intl;
            var22 = var23.format;
            var20 = var25[var20];
            var20 = var21.bind(var5)(var20);
            var20 = var20.t;
            var21 = var20.jDV3i4;
            var20 = {};
            var24 = var24.globalName;
            var20['username'] = var24;
            var20 = var22.bind(var23)(var21, var20);
            var17['children'] = var20;
            var14 = var19.bind(var5)(var18, var17);
 635:
            var12[1] = var14;
            var18 = var8.formResponses;
            var17 = var18.filter;
            var14 = function(arg1) {
                var1 = arg1;
                var2 = var1.field_type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 15;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.VerificationFormFieldTypes;
                var1 = var1.TERMS;
                var1 = var2 !== var1;
                return var1;
            };
            var17 = var17.bind(var18)(var14);
            var14 = var17.map;
            var13 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var13 = arg1;
                    var2 = var13.field_type;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 15;
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
                    var4 = _closure1_slot8;
                    var3 = _closure1_slot3;
                    var2 = {};
                    var8 = _closure1_slot7;
                    var1 = {};
                    var14 = _closure2_slot0;
                    var7 = var14.divider;
                    var1['style'] = var7;
                    var7 = var8.bind(var5)(var3, var1);
                    var1 = new Array(3);
                    var1[0] = var7;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 13;
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
            var13 = var14.bind(var17)(var13);
            var12[2] = var13;
            var6['children'] = var12;
            var10 = var4.bind(var5)(var10, var6);
            var6 = new Array(2);
            var6[0] = var10;
            if(!var7) { _fun0001_ip = 707; continue _fun0001 }
 704:
            var7 = var9;
 707:
            if(!var7) { _fun0001_ip = 752; continue _fun0001 }
 710:
            var9 = var8.applicationStatus;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 15;
            var8 = var12[var8];
            var8 = var10.bind(var5)(var8);
            var8 = var8.GuildJoinRequestApplicationStatuses;
            var8 = var8.SUBMITTED;
            var7 = var9 === var8;
 752:
            if(!var7) { _fun0001_ip = 1008; continue _fun0001 }
 758:
            var10 = _closure1_slot8;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var8 = 16;
            var8 = var19[var8];
            var8 = var18.bind(var5)(var8);
            var9 = var8.ButtonGroup;
            var8 = {'direction': 'horizontal', 'align': 'center'};
            var14 = _closure1_slot7;
            var12 = 17;
            var11 = var19[var12];
            var11 = var18.bind(var5)(var11);
            var13 = var11.Button;
            var11 = {'grow': true, 'size': 'md', 'variant': 'primary'};
            var11['onPress'] = var15;
            var15 = 14;
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
 1008:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1022:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
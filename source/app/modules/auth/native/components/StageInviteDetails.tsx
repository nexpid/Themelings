// app/modules/auth/native/components/StageInviteDetails.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var12 = 2;
    var4 = var6[var12];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var13 = var4.Fonts;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'alignItems': 'flex-start', 'flexDirection': 'column', 'width': '100%'};
    var4['container'] = var9;
    var9 = {};
    var10 = 6;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.GREEN_230;
    var9['color'] = var14;
    var14 = 'uppercase';
    var9['textTransform'] = var14;
    var13 = var13.PRIMARY_BOLD;
    var9['fontFamily'] = var13;
    var4['live'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between', 'width': '100%'};
    var4['flex'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var4['inline'] = var9;
    var9 = {};
    var13 = 8;
    var9['marginStart'] = var13;
    var4['label'] = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_TERTIARY;
    var9['backgroundColor'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var9['borderRadius'] = var14;
    var9['paddingHorizontal'] = var13;
    var9['paddingVertical'] = var12;
    var4['pill'] = var9;
    var9 = {};
    var12 = 12;
    var9['marginTop'] = var12;
    var4['header'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.WHITE;
    var9['backgroundColor'] = var10;
    var4['stageCard'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/StageInviteDetails.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.stageInstance;
            var10 = var1.guild;
            var11 = var1.channelId;
            var7 = var1.containerStyle;
            var1 = _closure1_slot7;
            var5 = undefined;
            var17 = var1.bind(var5)();
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 700; continue _fun0001 }
 47:
            if(!(var1 != var10)) { _fun0001_ip = 700; continue _fun0001 }
 54:
            var16 = var2.topic;
            var12 = var2.speaker_count;
            var23 = var2.participant_count;
            var4 = var2.members;
            if(!(var1 == var4)) { _fun0001_ip = 86; continue _fun0001 }
 82:
            var4 = new Array(0);
 86:
            if(!(var1 == var4)) { _fun0001_ip = 96; continue _fun0001 }
 90:
            var13 = new Array(0);
            _fun0001_ip = 115; continue _fun0001;
 96:
            var3 = var4.map;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg1;
                    var1 = {};
                    var5 = var3.nick;
                    var2 = null;
                    if(!(var2 == var5)) { _fun0002_ip = 39; continue _fun0002 }
 17:
                    var6 = var3.user;
                    var7 = var2 == var6;
                    var4 = undefined;
                    if(var7) { _fun0002_ip = 36; continue _fun0002 }
 31:
                    var4 = var6.username;
 36:
                    var5 = var4;
 39:
                    var6 = var2 != var5;
                    var4 = '';
                    if(!var6) { _fun0002_ip = 53; continue _fun0002 }
 50:
                    var4 = var5;
 53:
                    var1['userNick'] = var4;
                    var4 = var3.user;
                    var4 = var2 != var4;
                    var2 = null;
                    if(!var4) { _fun0002_ip = 104; continue _fun0002 }
 72:
                    var5 = _closure1_slot4;
                    var8 = var3.user;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var9 = var4;
                    var3 = new var9[var5](var8, var7);
                    var2 = var3 instanceof Object ? var3 : var4;
 104:
                    var1['user'] = var2;
                    return var1;
                }
            };
            var13 = var3.bind(var4)(var2);
 115:
            var4 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = {};
            var8 = var17.container;
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var2['style'] = var6;
            var6 = {};
            var7 = var17.flex;
            var6['style'] = var7;
            var7 = {};
            var8 = var17.inline;
            var7['style'] = var8;
            var9 = _closure1_slot5;
            var8 = _closure1_slot1;
            var14 = _closure1_slot2;
            var21 = 7;
            var18 = var14[var21];
            var19 = var8.bind(var5)(var18);
            var18 = {};
            var20 = var14[var21];
            var20 = var8.bind(var5)(var20);
            var20 = var20.Sizes;
            var20 = var20.SMALL;
            var18['size'] = var20;
            var20 = 8;
            var20 = var14[var20];
            var20 = var8.bind(var5)(var20);
            var18['source'] = var20;
            var20 = var17.live;
            var20 = var20.color;
            var18['color'] = var20;
            var19 = var9.bind(var5)(var19, var18);
            var18 = new Array(2);
            var18[0] = var19;
            var19 = 9;
            var19 = var14[var19];
            var20 = var8.bind(var5)(var19);
            var19 = {};
            var24 = var17.live;
            var22 = new Array(2);
            var22[0] = var24;
            var24 = var17.label;
            var22[1] = var24;
            var19['style'] = var22;
            var15 = _closure1_slot0;
            var22 = 10;
            var24 = var14[var22];
            var24 = var15.bind(var5)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var22 = var14[var22];
            var22 = var15.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.X2K3//;
            var22 = var24.bind(var25)(var22);
            var19['children'] = var22;
            var19 = var9.bind(var5)(var20, var19);
            var18[1] = var19;
            var7['children'] = var18;
            var7 = var4.bind(var5)(var3, var7);
            var18 = new Array(2);
            var18[0] = var7;
            var19 = {};
            var20 = var17.inline;
            var7 = new Array(2);
            var7[0] = var20;
            var20 = var17.pill;
            var7[1] = var20;
            var19['style'] = var7;
            var7 = var14[var21];
            var20 = var8.bind(var5)(var7);
            var7 = {};
            var21 = var14[var21];
            var21 = var8.bind(var5)(var21);
            var21 = var21.Sizes;
            var21 = var21.EXTRA_SMALL;
            var7['size'] = var21;
            var21 = 11;
            var21 = var14[var21];
            var21 = var8.bind(var5)(var21);
            var7['source'] = var21;
            var7 = var9.bind(var5)(var20, var7);
            var20 = new Array(2);
            var20[0] = var7;
            var7 = 12;
            var21 = var14[var7];
            var21 = var15.bind(var5)(var21);
            var22 = var21.Text;
            var21 = {'style': null, 'variant': 'text-xs/medium', 'color': 'interactive-normal'};
            var25 = var17.label;
            var24 = new Array(1);
            var24[0] = var25;
            var21['style'] = var24;
            var21['children'] = var23;
            var21 = var9.bind(var5)(var22, var21);
            var20[1] = var21;
            var19['children'] = var20;
            var19 = var4.bind(var5)(var3, var19);
            var18[1] = var19;
            var6['children'] = var18;
            var18 = var4.bind(var5)(var3, var6);
            var6 = new Array(3);
            var6[0] = var18;
            var7 = var14[var7];
            var7 = var15.bind(var5)(var7);
            var15 = var7.Text;
            var7 = {'style': null, 'variant': 'heading-md/extrabold', 'color': 'header-primary'};
            var17 = var17.header;
            var7['style'] = var17;
            var7['children'] = var16;
            var7 = var9.bind(var5)(var15, var7);
            var6[1] = var7;
            var7 = 13;
            var7 = var14[var7];
            var8 = var8.bind(var5)(var7);
            var7 = {};
            var7['speakers'] = var13;
            var7['speakerCount'] = var12;
            var7['channelId'] = var11;
            var10 = var10.id;
            var7['guildId'] = var10;
            var10 = true;
            var7['isInvite'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 700:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
// app/modules/stage_channels/native/components/LiveStageTileSpeakers.tsx
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
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot4 = var8;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var13 = 8;
    var10 = {'paddingTop': 8, 'flexDirection': 'column', 'width': '100%'};
    var4['stageSpeakerListContainer'] = var10;
    var10 = {'paddingTop': 8, 'flexDirection': 'row'};
    var4['stageSpeakerListRow'] = var10;
    var10 = {'flex': 1, 'flexDirection': 'row'};
    var4['speakerItem'] = var10;
    var10 = {'backgroundColor': null, 'height': 20, 'width': 20, 'borderRadius': 10, 'marginRight': 8, 'alignItems': 'center', 'justifyContent': 'center'};
    var11 = 4;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SECONDARY;
    var10['backgroundColor'] = var14;
    var4['stageSpeakerIconContainer'] = var10;
    var10 = {'height': 12, 'width': 12};
    var4['stageOverflowSpeakerIcon'] = var10;
    var10 = {};
    var10['marginRight'] = var13;
    var4['stageSpeakerIcon'] = var10;
    var10 = {'flex': 1, 'lineHeight': 20, 'marginRight': 8};
    var4['stageSpeakerText'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_TERTIARY;
    var10['backgroundColor'] = var11;
    var4['inviteContainer'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var13 = var1.speakerRemainingCount;
            var10 = var1.isInvite;
            var1 = _closure1_slot6;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var9.speakerItem;
            var1['style'] = var5;
            var7 = _closure1_slot4;
            var5 = {};
            var11 = var9.stageSpeakerIconContainer;
            var8 = new Array(2);
            var8[0] = var11;
            if(!var10) { _fun0001_ip = 77; continue _fun0001 }
 71:
            var10 = var9.inviteContainer;
 77:
            var8[1] = var10;
            var5['style'] = var8;
            var8 = _closure1_slot4;
            var15 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 5;
            var10 = var14[var10];
            var11 = var15.bind(var4)(var10);
            var10 = {};
            var12 = 6;
            var12 = var14[var12];
            var12 = var15.bind(var4)(var12);
            var10['source'] = var12;
            var12 = var9.stageOverflowSpeakerIcon;
            var10['style'] = var12;
            var10 = var8.bind(var4)(var11, var10);
            var5['children'] = var10;
            var7 = var7.bind(var4)(var2, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var10 = _closure1_slot0;
            var6 = 7;
            var6 = var14[var6];
            var6 = var10.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var9 = var9.stageSpeakerText;
            var6['style'] = var9;
            var9 = 8;
            var11 = var14[var9];
            var11 = var10.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.format;
            var9 = var14[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            var10 = var9.jBS1r6;
            var9 = {};
            var9['count'] = var13;
            var9 = var11.bind(var12)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot7 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var11 = var1.speaker;
            var17 = var1.channelId;
            var16 = var1.guildId;
            var1 = _closure1_slot6;
            var5 = undefined;
            var10 = var1.bind(var5)();
            var1 = var11.user;
            var13 = null;
            var2 = var13 == var1;
            var1 = null;
            if(var2) { _fun0002_ip = 310; continue _fun0002 }
 51:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var10.speakerItem;
            var2['style'] = var6;
            var9 = _closure1_slot4;
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var18 = 9;
            var6 = var15[var18];
            var7 = var14.bind(var5)(var6);
            var6 = {};
            var8 = var11.user;
            var6['user'] = var8;
            var6['guildId'] = var16;
            var8 = _closure1_slot0;
            var18 = var15[var18];
            var18 = var8.bind(var5)(var18);
            var18 = var18.AvatarSizes;
            var18 = var18.XSMALL_20;
            var6['size'] = var18;
            var18 = var10.stageSpeakerIcon;
            var6['style'] = var18;
            var7 = var9.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = 7;
            var7 = var15[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'style': null, 'lineClamp': 1, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var10 = var10.stageSpeakerText;
            var7['style'] = var10;
            var10 = 10;
            var10 = var15[var10];
            var15 = var14.bind(var5)(var10);
            var14 = var15.getNickname;
            var10 = var11.user;
            var10 = var14.bind(var15)(var16, var17, var10);
            if(!(var13 == var10)) { _fun0002_ip = 246; continue _fun0002 }
 240:
            var10 = var11.userNick;
 246:
            if(!(var13 == var10)) { _fun0002_ip = 286; continue _fun0002 }
 250:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 11;
            var12 = var14[var12];
            var13 = var13.bind(var5)(var12);
            var12 = var13.getName;
            var11 = var11.user;
            var10 = var12.bind(var13)(var11);
 286:
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 310:
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var3 = var1.speakers;
            var _closure2_slot0 = var3;
            var9 = var1.speakerCount;
            var _closure2_slot1 = var9;
            var2 = var1.channelId;
            var _closure2_slot2 = var2;
            var2 = var1.guildId;
            var _closure2_slot3 = var2;
            var1 = var1.isInvite;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0003_ip = 57; continue _fun0003 }
 55:
            var1 = false;
 57:
            var _closure2_slot4 = var1;
            var _closure2_slot5 = var5;
            var1 = _closure1_slot6;
            var7 = var1.bind(var5)();
            _closure2_slot5 = var7;
            var4 = 0;
            var1 = null;
            if(!(var4 !== var9)) { _fun0003_ip = 140; continue _fun0003 }
 88:
            var3 = var3.length;
            var1 = null;
            if(!(var4 !== var3)) { _fun0003_ip = 140; continue _fun0003 }
 99:
            var4 = _closure1_slot4;
            var3 = _closure1_slot3;
            var2 = {};
            var7 = var7.stageSpeakerListContainer;
            var2['style'] = var7;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = new Array(0);
                    var3 = undefined;
                    var6 = 4;
                    var5 = null;
                    var7 = 0;
 19:
                    var8 = _closure2_slot0;
                    var8 = var8[var7];
                    if(!(var5 != var8)) { _fun0004_ip = 105; continue _fun0004 }
 31:
                    var9 = var8.user;
                    if(!(var5 != var9)) { _fun0004_ip = 105; continue _fun0004 }
 40:
                    var9 = var4.push;
                    var12 = _closure1_slot4;
                    var11 = _closure1_slot8;
                    var10 = {};
                    var10['speaker'] = var8;
                    var13 = _closure2_slot2;
                    var10['channelId'] = var13;
                    var13 = _closure2_slot3;
                    var10['guildId'] = var13;
                    var8 = var8.user;
                    var8 = var8.id;
                    var8 = var12.bind(var3)(var11, var10, var8);
                    var8 = var9.bind(var4)(var8);
                    var7 = var7 + 1;
                    if(var7 < var6) { _fun0004_ip = 19; continue _fun0004 }
 105:
                    var7 = var4.length;
                    var5 = _closure2_slot1;
                    if(!(var7 < var5)) { _fun0004_ip = 210; continue _fun0004 }
 118:
                    var5 = var4.length;
                    if(!(var6 === var5)) { _fun0004_ip = 137; continue _fun0004 }
 127:
                    var5 = var4.pop;
                    var5 = var5.bind(var4)();
 137:
                    var5 = var4.push;
                    var8 = _closure1_slot4;
                    var7 = _closure1_slot7;
                    var6 = {};
                    var9 = _closure2_slot4;
                    var6['isInvite'] = var9;
                    var9 = _closure2_slot1;
                    var2 = global;
                    var10 = var2.Number;
                    var2 = var4.length;
                    var2 = var10.bind(var3)(var2);
                    var2 = var9 - var2;
                    var6['speakerRemainingCount'] = var2;
                    var2 = 'speakerOverflow';
                    var2 = var8.bind(var3)(var7, var6, var2);
                    var2 = var5.bind(var4)(var2);
 210:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 12;
                    var1 = var5[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.chunk;
                    var1 = 2;
                    var3 = var2.bind(var3)(var4, var1);
                    var2 = var3.map;
                    var1 = function(arg1, arg2) {
                        var5 = _closure1_slot4;
                        var4 = _closure1_slot3;
                        var3 = {};
                        var1 = _closure2_slot5;
                        var1 = var1.stageSpeakerListRow;
                        var3['style'] = var1;
                        var1 = arg1;
                        var3['children'] = var1;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var6 = var1.concat;
                        var2 = 'speakerListRow-';
                        var1 = arg2;
                        var2 = var6.bind(var2)(var1);
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4, var3, var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var6 = var6.bind(var5)();
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 140:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/components/LiveStageTileSpeakers.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
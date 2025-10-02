// app/modules/forums/native/posts/ForumPostAppliedTags.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot3 = var7;
    var7 = var4.jsxs;
    var _closure1_slot4 = var7;
    var4 = var4.Fragment;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var4['pillTagsContainer'] = var9;
    var9 = {};
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.FORUM_POST_TAG_BACKGROUND;
    var9['backgroundColor'] = var12;
    var4['tag'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    var4['tagsContainer'] = var9;
    var9 = {'backgroundColor': null, 'height': 4, 'width': 4, 'borderRadius': 10, 'marginHorizontal': 8};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MODIFIER_ACCENT;
    var9['backgroundColor'] = var10;
    var4['dot'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/posts/ForumPostAppliedTags.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function ForumPostAppliedTagPills(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.appliedTags;
            var10 = var1.hasUnreads;
            var _closure2_slot0 = var10;
            var15 = var1.additionalTagsCount;
            var4 = undefined;
            if(!(var15 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var15 = 0;
case 2:
            var9 = var1.containerStyle;
            var _closure2_slot1 = var4;
            var1 = _closure1_slot6;
            var11 = var1.bind(var4)();
            _closure2_slot1 = var11;
            var3 = _closure1_slot4;
            var2 = _closure1_slot2;
            var1 = {};
            var6 = new Array(2);
            var6[0] = var9;
            var9 = var11.pillTagsContainer;
            var6[1] = var9;
            var1['style'] = var6;
            var6 = var8.map;
            var5 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot3;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 5;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.AppliedForumTagPill;
                var2 = {};
                var2['tag'] = var1;
                var7 = _closure2_slot1;
                var7 = var7.tag;
                var2['containerStyle'] = var7;
                var6 = _closure2_slot0;
                var2['hasUnreads'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var6 = var6.bind(var8)(var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = 0;
            var6 = var15 > var6;
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = _closure1_slot3;
            var8 = _closure1_slot0;
            var12 = _closure1_slot1;
            var7 = 5;
            var7 = var12[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.AppliedForumTagPill;
            var7 = {};
            var12 = {};
            var13 = '-1';
            var12['id'] = var13;
            var13 = global;
            var13 = var13.HermesInternal;
            var14 = var13.concat;
            var13 = '+';
            var13 = var14.bind(var13)(var15);
            var12['name'] = var13;
            var7['tag'] = var12;
            var11 = var11.tag;
            var7['containerStyle'] = var11;
            var7['hasUnreads'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 4:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ForumPostAppliedTagPills'] = var4;
    var2 = function ForumPostAppliedTags(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var7 = var1.appliedTags;
            var _closure2_slot0 = var7;
            var14 = var1.hasUnreads;
            var _closure2_slot1 = var14;
            var18 = var1.additionalTagsCount;
            var4 = undefined;
            if(!(var18 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var18 = 0;
case 6:
            var8 = var1.containerStyle;
            var _closure2_slot2 = var4;
            var1 = _closure1_slot6;
            var15 = var1.bind(var4)();
            _closure2_slot2 = var15;
            var3 = _closure1_slot4;
            var2 = _closure1_slot2;
            var1 = {};
            var6 = new Array(2);
            var6[0] = var8;
            var8 = var15.tagsContainer;
            var6[1] = var8;
            var1['style'] = var6;
            var6 = var7.map;
            var5 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = arg1;
                    var4 = _closure1_slot4;
                    var3 = _closure1_slot5;
                    var2 = {};
                    var9 = _closure1_slot3;
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 5;
                    var6 = var6[var1];
                    var1 = undefined;
                    var6 = var8.bind(var1)(var6);
                    var8 = var6.AppliedForumTag;
                    var6 = {};
                    var6['tag'] = var5;
                    var11 = _closure2_slot1;
                    var6['hasUnreads'] = var11;
                    var5 = var5.id;
                    var6 = var9.bind(var1)(var8, var6, var5);
                    var5 = new Array(2);
                    var5[0] = var6;
                    var6 = _closure2_slot0;
                    var8 = var6.length;
                    var6 = 1;
                    var8 = var8 - var6;
                    var6 = arg2;
                    var6 = var6 !== var8;
                    if(!var6) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var9 = _closure1_slot3;
                    var8 = _closure1_slot2;
                    var7 = {};
                    var10 = _closure2_slot2;
                    var10 = var10.dot;
                    var7['style'] = var10;
                    var6 = var9.bind(var1)(var8, var7);
case 8:
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var6 = var6.bind(var7)(var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = 0;
            var6 = var18 > var6;
            if(!var6) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var9 = _closure1_slot4;
            var8 = _closure1_slot5;
            var7 = {};
            var13 = _closure1_slot3;
            var12 = _closure1_slot2;
            var10 = {};
            var15 = var15.dot;
            var10['style'] = var15;
            var12 = var13.bind(var4)(var12, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var12 = _closure1_slot0;
            var15 = _closure1_slot1;
            var11 = 5;
            var11 = var15[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.AppliedForumTag;
            var11 = {};
            var15 = {};
            var16 = '-1';
            var15['id'] = var16;
            var16 = global;
            var16 = var16.HermesInternal;
            var17 = var16.concat;
            var16 = '+';
            var16 = var17.bind(var16)(var18);
            var15['name'] = var16;
            var11['tag'] = var15;
            var11['hasUnreads'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 10:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ForumPostAppliedTags'] = var2;
    return var1;
})();
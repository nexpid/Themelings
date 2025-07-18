// app/modules/forums/native/ForumPostTagsActionSheet.tsx
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
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MAX_FORUM_POST_TAGS;
    var _closure1_slot6 = var4;
    var10 = 4;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'display': 'flex', 'flexDirection': 'row', 'flexWrap': 'wrap'};
    var4['tagsContainer'] = var9;
    var9 = {'marginTop': 8, 'marginHorizontal': 16, 'marginBottom': 16};
    var4['saveButton'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var4['subtitle'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/ForumPostTagsActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ForumPostTagsActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.thread;
            var _closure2_slot0 = var7;
            var3 = var1.parentChannel;
            var2 = var1.canManageThread;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0001_ip = 35; continue _fun0001 }
 33:
            var2 = true;
 35:
            var _closure2_slot1 = var2;
            var2 = var1.onSave;
            var _closure2_slot2 = var2;
            var10 = var1.title;
            if(!(var10 === var4)) { _fun0001_ip = 116; continue _fun0001 }
 58:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 6;
            var5 = var9[var2];
            var5 = var8.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var2 = var9[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.436ZFx;
            var10 = var5.bind(var6)(var2);
 116:
            var8 = var1.tags;
            var1 = var1.onClose;
            var _closure2_slot3 = var1;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var1 = _closure1_slot9;
            var9 = var1.bind(var4)();
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var6 = var6.bind(var4)(var2);
            var2 = var6.useAppliedTags;
            var2 = var2.bind(var6)(var7);
            var7 = _closure1_slot4;
            var6 = var7.useState;
            var12 = global;
            var12 = var12.Set;
            var13 = null;
            if(!(var13 != var8)) { _fun0001_ip = 216; continue _fun0001 }
 213:
            var2 = var8;
 216:
            var8 = var12.prototype;
            var8 = Object.create(var8, {constructor: {value: var12}});
            var20 = var8;
            var19 = var2;
            var2 = new var20[var12](var19, var18);
            var2 = var2 instanceof Object ? var2 : var8;
            var7 = var6.bind(var7)(var2);
            var6 = _closure1_slot3;
            var2 = 2;
            var7 = var6.bind(var4)(var7, var2);
            var2 = 0;
            var2 = var7[var2];
            _closure2_slot4 = var2;
            var6 = 1;
            var6 = var7[var6];
            _closure2_slot5 = var6;
            var6 = var2.size;
            var2 = _closure1_slot6;
            var2 = var6 >= var2;
            _closure2_slot6 = var2;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = var16[var1];
            var2 = var15.bind(var4)(var1);
            var1 = var2.useVisibleForumTags;
            var13 = var1.bind(var2)(var3);
            var1 = function toggleTag(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = arg1;
                    var1 = null;
                    if(!(var1 != var4)) { _fun0002_ip = 101; continue _fun0002 }
 9:
                    var1 = global;
                    var5 = var1.Set;
                    var6 = _closure2_slot4;
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {constructor: {value: var5}});
                    var7 = var3;
                    var2 = new var7[var5](var6, var5);
                    var3 = var2 instanceof Object ? var2 : var3;
                    var2 = var3.has;
                    var2 = var2.bind(var3)(var4);
                    if(var2) { _fun0002_ip = 80; continue _fun0002 }
 57:
                    var2 = _closure2_slot6;
                    if(var2) { _fun0002_ip = 76; continue _fun0002 }
 64:
                    var2 = var3.add;
                    var2 = var2.bind(var3)(var4);
                    _fun0002_ip = 90; continue _fun0002;
 76:
                    var2 = undefined;
                    return var2;
 80:
                    var2 = var3.delete;
                    var2 = var2.bind(var3)(var4);
 90:
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
 101:
                    var1 = undefined;
                    return var1;
                }
            };
            _closure2_slot7 = var1;
            var3 = _closure1_slot8;
            var1 = 8;
            var1 = var16[var1];
            var1 = var15.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {};
            var6 = function onDismiss() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var4 = var1 == var3;
                    var3 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0003_ip = 28; continue _fun0003 }
 20:
                    var2 = _closure2_slot3;
                    var1 = var2.bind(var3)();
 28:
                    return var1;
                }
            };
            var1['onDismiss'] = var6;
            var8 = _closure1_slot7;
            var6 = 9;
            var6 = var16[var6];
            var6 = var15.bind(var4)(var6);
            var7 = var6.BottomSheetTitleHeader;
            var6 = {};
            var6['title'] = var10;
            var12 = 6;
            var10 = var16[var12];
            var10 = var15.bind(var4)(var10);
            var17 = var10.intl;
            var14 = var17.string;
            var10 = var16[var12];
            var10 = var15.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.+HS9+v;
            var10 = var14.bind(var17)(var10);
            var6['subtitle'] = var10;
            var10 = var9.subtitle;
            var6['subtitleStyle'] = var10;
            var6 = var8.bind(var4)(var7, var6);
            var1['header'] = var6;
            var7 = _closure1_slot5;
            var5 = {};
            var6 = var9.tagsContainer;
            var5['style'] = var6;
            var10 = var13.map;
            var6 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var3 = _closure2_slot4;
                    var2 = var3.has;
                    var6 = var2.bind(var3)(var1);
                    var5 = _closure1_slot7;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 10;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var2['tag'] = var1;
                    var8 = _closure2_slot1;
                    var8 = !var8;
                    if(var8) { _fun0004_ip = 78; continue _fun0004 }
 65:
                    var9 = _closure2_slot6;
                    if(!var9) { _fun0004_ip = 75; continue _fun0004 }
 72:
                    var9 = !var6;
 75:
                    var8 = var9;
 78:
                    var2['disabled'] = var8;
                    var7 = _closure2_slot7;
                    var2['onPress'] = var7;
                    var2['selected'] = var6;
                    var1 = var1.id;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var6 = var10.bind(var13)(var6);
            var5['children'] = var6;
            var6 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var9 = var9.saveButton;
            var6['style'] = var9;
            var9 = 11;
            var9 = var16[var9];
            var9 = var15.bind(var4)(var9);
            var10 = var9.Button;
            var9 = {};
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.R3BPHx;
            var12 = var13.bind(var14)(var12);
            var9['text'] = var12;
            var11 = function onPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = global;
                    var4 = var1.Array;
                    var3 = var4.from;
                    var2 = _closure2_slot4;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var5 = var3.bind(var4)(var2);
                    var2 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 == var2)) { _fun0005_ip = 110; continue _fun0005 }
 54:
                    var2 = _closure2_slot0;
                    if(!(var3 != var2)) { _fun0005_ip = 138; continue _fun0005 }
 62:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.updateForumPostTags;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2, var5);
                    _fun0005_ip = 138; continue _fun0005;
 110:
                    var3 = _closure2_slot2;
                    var7 = _closure2_slot4;
                    var2 = new Array(0);
                    var6 = 0;
                    var8 = var2;
                    var1 = arraySpread(var8, var7, var6);
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 138:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var9['onPress'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
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
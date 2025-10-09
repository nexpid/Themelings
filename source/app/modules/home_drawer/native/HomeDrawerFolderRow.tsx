// app/modules/home_drawer/native/HomeDrawerFolderRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function Wrapper(arg1) {
        var1 = arg1;
        var3 = var1.folder;
        var _closure2_slot0 = var3;
        var4 = var1.unread;
        var _closure2_slot1 = var4;
        var8 = _closure1_slot3;
        var7 = var8.useMemo;
        var6 = function() {
            var1 = {};
            var2 = false;
            var1['isMuted'] = var2;
            return var1;
        };
        var5 = new Array(0);
        var8 = var7.bind(var8)(var6, var5);
        var _closure2_slot2 = var8;
        var7 = _closure1_slot3;
        var6 = var7.useMemo;
        var9 = var3.folderName;
        var5 = new Array(3);
        var5[0] = var9;
        var5[1] = var8;
        var5[2] = var4;
        var4 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot2;
                var1 = var1.isMuted;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var7 = _closure1_slot6;
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var7 = var1.BellSlashIcon;
case 4:
                var12 = _closure2_slot1;
                if(!var12) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var1 = _closure2_slot2;
                var1 = var1.isMuted;
                var12 = !var1;
case 5:
                var4 = _closure1_slot8;
                var3 = _closure1_slot4;
                var2 = {};
                var1 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
                var2['style'] = var1;
                var6 = _closure1_slot7;
                var5 = {};
                var1 = 'xs';
                var5['size'] = var1;
                var1 = undefined;
                var6 = var6.bind(var1)(var7, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot7;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 6;
                var6 = var11[var6];
                var6 = var7.bind(var1)(var6);
                var7 = var6.Text;
                var6 = {};
                var11 = 'text-md/semibold';
                var6['variant'] = var11;
                var11 = 'header-muted';
                if(!var12) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                var11 = 'header-primary';
case 7:
                var6['color'] = var11;
                var9 = _closure2_slot0;
                var9 = var9.folderName;
                var11 = null;
                if(!(var11 == var9)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 7;
                var11 = var14[var10];
                var11 = var13.bind(var1)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var1)(var10);
                var10 = var10.t;
                var10 = var10.JQ/1n5;
                var9 = var11.bind(var12)(var10);
case 9:
                var6['children'] = var9;
                var6 = var8.bind(var1)(var7, var6);
                var5[1] = var6;
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            }
        };
        var6 = var6.bind(var7)(var4, var5);
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var3 = var3.guildIds;
        var7 = var3.length;
        var3 = new Array(1);
        var3[0] = var7;
        var2 = function() {
            var4 = _closure1_slot7;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 6;
            var1 = var9[var1];
            var3 = undefined;
            var1 = var6.bind(var3)(var1);
            var2 = var1.Text;
            var1 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var5 = 7;
            var7 = var9[var5];
            var7 = var6.bind(var3)(var7);
            var8 = var7.intl;
            var7 = var8.format;
            var5 = var9[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.t;
            var6 = var5.knOfkZ;
            var5 = {};
            var9 = _closure2_slot0;
            var9 = var9.guildIds;
            var9 = var9.length;
            var5['num'] = var9;
            var5 = var7.bind(var8)(var6, var5);
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5 = var4.bind(var5)(var2, var3);
        var4 = _closure1_slot7;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 8;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.HomeDrawerSharedItem;
        var1 = {};
        var1['title'] = var6;
        var1['subtitle'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/home_drawer/native/HomeDrawerFolderRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function HomeDrawerFolderExpandedChildren(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = var2.folderId;
            var _closure2_slot0 = var3;
            var6 = var2.unread;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var5 = 9;
            var7 = var4[var5];
            var5 = undefined;
            var9 = var3.bind(var5)(var7);
            var8 = var9.useStateFromStores;
            var10 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var10;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var4 = _closure1_slot5;
                    var3 = var4.getGuildFolderById;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 11:
                    return var1;
                }
            };
            var7 = var8.bind(var9)(var7, var1);
            var1 = 10;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var8 = var1.MobileHomeDrawerExperiment;
            var3 = var8.useConfig;
            var1 = {};
            var9 = 'folder-expanded-children';
            var1['location'] = var9;
            var1 = var3.bind(var8)(var1);
            var8 = var1.enableHome;
            var3 = _closure1_slot1;
            var1 = 11;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var3 = var1.isChatBesideChannelList;
            var4 = null;
            var9 = var4 == var7;
            var1 = null;
            if(var9) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var1 = null;
            if(!var8) { _fun0002_ip = 13; continue _fun0002 }
case 15:
            var1 = null;
            if(var3) { _fun0002_ip = 13; continue _fun0002 }
case 16:
            var4 = _closure1_slot7;
            var3 = _closure1_slot9;
            var2 = {};
            var2['folder'] = var7;
            var2['unread'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 13:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
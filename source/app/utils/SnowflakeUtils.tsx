// app/utils/SnowflakeUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var4 = native2;
    var3 = native6;
    var5 = native7;
    var2 = native3;
    var _closure1_slot0 = var2;
    var2 = native4;
    var _closure1_slot1 = var2;
    var _closure1_slot2 = var5;
    var2 = global;
    var8 = var2.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var2 = true;
    var6['value'] = var2;
    var2 = '__esModule';
    var2 = var7.bind(var8)(var3, var2, var6);
    var2 = {};
    var6 = function age(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.age;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['age'] = var6;
    var6 = function extractTimestamp(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.extractTimestamp;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['extractTimestamp'] = var6;
    var6 = function compare(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.compare;
        var2 = arg1;
        var1 = arg2;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['compare'] = var6;
    var6 = function atPreviousMillisecond(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.atPreviousMillisecond;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['atPreviousMillisecond'] = var6;
    var6 = function fromTimestamp(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.fromTimestamp;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['fromTimestamp'] = var6;
    var6 = function fromTimestampWithSequence(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.fromTimestampWithSequence;
        var2 = arg1;
        var1 = arg2;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['fromTimestampWithSequence'] = var6;
    var6 = function keys(arg1) {
        var1 = global;
        var3 = var1.Object;
        var2 = var3.keys;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['keys'] = var6;
    var6 = function forEach(arg1, arg2) {
        var1 = arg2;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 0;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.forEach;
        var3 = arg1;
        var2 = function(arg1, arg2) {
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = arg1;
            var1 = arg2;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['forEach'] = var6;
    var6 = function forEachKey(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg2;
            var5 = arg1;
            var1 = undefined;
            for(var2 in var5)
 16:
            {
 25:
                var8 = var2;
                var8 = var7.bind(var1)(var8);
                _fun0001_ip = 16; continue _fun0001;
            }
 35:
            return var1;
        }
    };
    var2['forEachKey'] = var6;
    var6 = function entries(arg1) {
        var1 = global;
        var3 = var1.Object;
        var2 = var3.entries;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['entries'] = var6;
    var6 = function isProbablyAValidSnowflake(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.isProbablyAValidSnowflake;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['isProbablyAValidSnowflake'] = var6;
    var6 = function castChannelIdAsMessageId(arg1) {
        var1 = arg1;
        return var1;
    };
    var2['castChannelIdAsMessageId'] = var6;
    var6 = function castMessageIdAsChannelId(arg1) {
        var1 = arg1;
        return var1;
    };
    var2['castMessageIdAsChannelId'] = var6;
    var6 = function castGuildIdAsEveryoneGuildRoleId(arg1) {
        var1 = arg1;
        return var1;
    };
    var2['castGuildIdAsEveryoneGuildRoleId'] = var6;
    var1 = function cast(arg1) {
        var1 = arg1;
        return var1;
    };
    var2['cast'] = var1;
    var1 = 2;
    var6 = var5[var1];
    var1 = undefined;
    var8 = var4.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/SnowflakeUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var2;
    var2 = 1;
    var6 = var5[var2];
    var6 = var4.bind(var1)(var6);
    var6 = var6.DISCORD_EPOCH;
    var3['DISCORD_EPOCH'] = var6;
    var2 = var5[var2];
    var2 = var4.bind(var1)(var2);
    var2 = var2.SnowflakeSequence;
    var3['SnowflakeSequence'] = var2;
    return var1;
})();
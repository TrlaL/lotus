<template></template>

<script>
export default {
  props: {
    parsedDate: { required: true }
  },

  computed: {
    b () {
      return this.parsedDate.month
    },
    a () {
      if (this.parsedDate.day > 22) {
        return this.$tools.sumDigits(this.parsedDate.day)
      } else {
        return this.parsedDate.day
      }
    },
    c () {
      if (this.$tools.sumDigits(this.parsedDate.year) > 22) {
        return this.$tools.sumDigits(this.$tools.sumDigits(this.parsedDate.year))
      } else {
        return this.$tools.sumDigits(this.parsedDate.year)
      }
    },
    y () {
      if (this.a + this.b + this.c > 22) {
        return this.$tools.sumDigits(this.a + this.b + this.c)
      } else {
        return this.a + this.b + this.c
      }
    },
    x () {
      if (this.a + this.b + this.c + this.y > 22) {
        return this.$tools.sumDigits(this.a + this.b + this.c + this.y)
      } else {
        return this.a + this.b + this.c + this.y
      }
    },
    z () {
      if (this.a + this.b > 22) {
        return this.$tools.sumDigits(this.a + this.b)
      } else {
        return this.a + this.b
      }
    },
    f () {
      if (this.b + this.c > 22) {
        return this.$tools.sumDigits(this.b + this.c)
      } else {
        return this.b + this.c
      }
    },
    h () {
      if (this.c + this.y > 22) {
        return this.$tools.sumDigits(this.c + this.y)
      } else {
        return this.c + this.y
      }
    },
    g () {
      if (this.y + this.x > 22) {
        return this.$tools.sumDigits(this.y + this.x)
      } else {
        return this.y + this.x
      }
    },
    m () {
      if (this.x + this.a > 22) {
        return this.$tools.sumDigits(this.x + this.a)
      } else {
        return this.x + this.a
      }
    },
    n () {
      if (this.z + this.a > 22) {
        return this.$tools.sumDigits(this.z + this.a)
      } else {
        return this.z + this.a
      }
    },
    k () {
      if (this.z + this.b > 22) {
        return this.$tools.sumDigits(this.z + this.b)
      } else {
        return this.z + this.b
      }
    },
    p () {
      if (this.f + this.b > 22) {
        return this.$tools.sumDigits(this.f + this.b)
      } else {
        return this.f + this.b
      }
    },
    w () {
      if (this.f + this.c > 22) {
        return this.$tools.sumDigits(this.f + this.c)
      } else {
        return this.f + this.c
      }
    },
    s () {
      if (this.c + this.h > 22) {
        return this.$tools.sumDigits(this.c + this.h)
      } else {
        return this.c + this.h
      }
    },
    o () {
      if (this.y + this.h > 22) {
        return this.$tools.sumDigits(this.y + this.h)
      } else {
        return this.y + this.h
      }
    },
    e () {
      if (this.y + this.g > 22) {
        return this.$tools.sumDigits(this.y + this.g)
      } else {
        return this.y + this.g
      }
    },
    x1 () {
      if (this.x + this.g > 22) {
        return this.$tools.sumDigits(this.x + this.g)
      } else {
        return this.x + this.g
      }
    },
    x2 () {
      if (this.x + this.m > 22) {
        return this.$tools.sumDigits(this.x + this.m)
      } else {
        return this.x + this.m
      }
    },
    m1 () {
      if (this.a + this.m > 22) {
        return this.$tools.sumDigits(this.a + this.m)
      } else {
        return this.a + this.m
      }
    },
    zm () {
      if (this.z + this.m > 22) {
        return this.$tools.sumDigits(this.z + this.m)
      } else {
        return this.z + this.m
      }
    },
    zf () {
      if (this.z + this.f > 22) {
        return this.$tools.sumDigits(this.z + this.f)
      } else {
        return this.z + this.f
      }
    },
    fh () {
      if (this.f + this.h > 22) {
        return this.$tools.sumDigits(this.f + this.h)
      } else {
        return this.f + this.h
      }
    },
    hg () {
      if (this.h + this.g > 22) {
        return this.$tools.sumDigits(this.h + this.g)
      } else {
        return this.h + this.g
      }
    },
    gm () {
      if (this.g + this.m > 22) {
        return this.$tools.sumDigits(this.g + this.m)
      } else {
        return this.g + this.m
      }
    }
  },

  watch: {
    a: {
      immediate: true,
      handler (a) {
        this.update('update:a', a)
      }
    },
    b: {
      immediate: true,
      handler (b) {
        this.update('update:b', b)
      }
    },
    c: {
      immediate: true,
      handler (c) {
        this.update('update:c', c)
      }
    },
    y: {
      immediate: true,
      handler (y) {
        this.update('update:y', y)
      }
    },
    x: {
      immediate: true,
      handler (x) {
        this.update('update:x', x)
      }
    },
    z: {
      immediate: true,
      handler (z) {
        this.update('update:z', z)
      }
    },
    f: {
      immediate: true,
      handler (f) {
        this.update('update:f', f)
      }
    },
    h: {
      immediate: true,
      handler (h) {
        this.update('update:h', h)
      }
    },
    g: {
      immediate: true,
      handler (g) {
        this.update('update:g', g)
      }
    },
    m: {
      immediate: true,
      handler (m) {
        this.update('update:m', m)
      }
    },
    n: {
      immediate: true,
      handler (n) {
        this.update('update:n', n)
      }
    },
    k: {
      immediate: true,
      handler (k) {
        this.update('update:k', k)
      }
    },
    p: {
      immediate: true,
      handler (p) {
        this.update('update:p', p)
      }
    },
    w: {
      immediate: true,
      handler (w) {
        this.update('update:w', w)
      }
    },
    s: {
      immediate: true,
      handler (s) {
        this.update('update:s', s)
      }
    },
    o: {
      immediate: true,
      handler (o) {
        this.update('update:o', o)
      }
    },
    e: {
      immediate: true,
      handler (e) {
        this.update('update:e', e)
      }
    },
    x1: {
      immediate: true,
      handler (x1) {
        this.update('update:x1', x1)
      }
    },
    x2: {
      immediate: true,
      handler (x2) {
        this.update('update:x2', x2)
      }
    },
    m1: {
      immediate: true,
      handler (m1) {
        this.update('update:m1', m1)
      }
    },
    zm: {
      immediate: true,
      handler (zm) {
        this.update('update:zm', zm)
      }
    },
    zf: {
      immediate: true,
      handler (zf) {
        this.update('update:zf', zf)
      }
    },
    fh: {
      immediate: true,
      handler (fh) {
        this.update('update:fh', fh)
      }
    },
    hg: {
      immediate: true,
      handler (hg) {
        this.update('update:hg', hg)
      }
    },
    gm: {
      immediate: true,
      handler (gm) {
        this.update('update:gm', gm)
      }
    }
  },

  methods: {
    update (key, value) {
      this.$lodash.delay(() => {
        this.$emit(key, value)
      }, this.$tools.randomIntFromInterval(0, 500))
    }
  }
}
</script>